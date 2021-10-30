<template>
  <div>
    <div v-if="pageLoading" class="my-16">
      <Spinner />
    </div>
    <div v-if="page">
      <div
        v-for="component in page.components"
        class="py-7 px-5 md:py-9 md:px-10 lg:px-20"
        v-bind:key="component.id"
      >
        <div class="max-w-screen-2xl mx-auto">
          <div class="grid grid-cols-8 gap-16">
            <div class="col-span-full lg:col-span-3">
              <div class="lg:fixed lg:max-w-xs xl:max-w-md lg:h-full lg:pb-5">
                <div>
                  <div>
                    <router-link
                      to="/despre"
                      class="inline-block py-3 px-2 font-semibold text-sm tracking-wide text-white text-opacity-60 hover:text-opacity-100"
                    >
                      Despre proiect
                    </router-link>
                  </div>

                  <router-link
                    to="/"
                    class="relative inline-block my-5 py-3 pl-14 text-7xl font-normal"
                    v-if="component.victimsCount"
                  >
                    <span
                      class="absolute left-2 top-0 bottom-0 my-auto transform rotate-45 w-9 h-9 border-l-2 border-b-2 border-white"
                    ></span>
                    {{ (+component.victimsCount.victims).toLocaleString() }}
                  </router-link>

                  <p
                    class="mb-8 text-2xl font-thin text-white text-opacity-80"
                  >
                    {{ component.content }}
                  </p>

                  <ul
                    v-if="component.buttons"
                    class="mb-8"
                  >
                    <li v-for="button in component.buttons" v-bind:key="button.id">
                      <router-link
                        v-if="button.href"
                        :to="button.href"
                        class="inline-block py-3 text-2xl font-normal lg:text-xl xl:text-2xl"
                        ><span class="underline">{{ button.text }}</span></router-link
                      >
                    </li>
                  </ul>

                  <div class="lg:mb-16">
                    <button
                      class="inline-block border border-white p-3 text-base leading-4 uppercase font-thin tracking-widest"
                      :class="{ 'opacity-60 border-r-0': list }"
                      @click="
                        gallery = true;
                        list = false;
                      "
                    >
                      Galerie
                    </button>
                    <button
                      class="inline-block border border-white p-3 text-base leading-4 uppercase font-thin tracking-widest"
                      :class="{ 'opacity-60 border-l-0': gallery }"
                      @click="
                        list = true;
                        gallery = false;
                      "
                    >
                      Listă
                    </button>
                  </div>

                  <MadeBy class="hidden lg:block" />
                </div>
              </div>
            </div>

            <div class="col-span-full lg:relative lg:col-span-5">
              <div class="listing-content lg:relative">
                <transition name="listing-transition">
                  <DynamicScroller
                    v-show="list"
                    v-if="storiesList.length > 0"
                    :items="storiesList"
                    :min-item-size="64"
                    class="listing-list h-screen"
                    key-field="index"
                  >
                    <template v-slot="{ item, index, active }">
                      <DynamicScrollerItem
                        :item="item"
                        :active="active"
                        :size-dependencies="[item.stories]"
                        :data-index="index"
                      >
                        <Item :row="item" :banner="bannersList[index]" />
                      </DynamicScrollerItem>
                    </template>
                  </DynamicScroller>
                  <div
                    v-else
                    class="flex flex-col justify-center align-middle h-full"
                  >
                    <Spinner />
                  </div>
                </transition>
                <transition name="listing-transition">
                  <div v-show="gallery">
                    <DynamicScroller
                      v-if="storiesList.length > 0"
                      :items="storiesList"
                      :min-item-size="64"
                      class="listing-list h-screen"
                      key-field="index"
                    >
                      <template v-slot="{ item, index, active }">
                        <DynamicScrollerItem
                          :item="item"
                          :active="active"
                          :size-dependencies="[item.stories]"
                          :data-index="index"
                        >
                          <Card :row="item" />
                        </DynamicScrollerItem>
                      </template>
                    </DynamicScroller>
                    <div
                      v-else
                      class="flex flex-col justify-center align-middle h-full"
                    >
                      <Spinner />
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import api from "@/api";
import shuffle from "@/lib/shuffle";
import MadeBy from "@/components/MadeBy.vue";
import Spinner from "@/components/Spinner.vue";
import Item from "@/components/Item.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Listing",
  components: {
    MadeBy,
    Spinner,
    Item,
    Card
  },
  data: () => {
    return {
      list: true,
      gallery: false,
      stories: [],
      storiesError: null,
      storiesLoading: false,
      page: null,
      pageError: null,
      pageLoading: false,
      banners: [],
      bannersError: null,
      bannersLoading: false
    };
  },
  computed: {
    bannersList: function() {
      return this.banners.reduce(
        (o, key) => ({
          ...o,
          [key.index]: {
            content: key.content
          }
        }),
        {}
      );
    },
    storiesList: function() {
      const victimsCount =
        this.page && +this.page.components[0].victimsCount.victims;
      const list = this.stories.map(story => ({
        id: story.id,
        title: `${story.victimLastName} ${story.victimFirstName}`,
        age: story.age,
        occupation: story.occupation,
        address: `${story.county}, ${story.city}`,
        url: `/poveste/${story.id}`
      }));
      const rows =
        this.stories.length > 0 &&
        victimsCount &&
        [
          ...shuffle([...list, ...this.placeholdersList(list.length * 4)]),
          ...this.placeholdersList(victimsCount - list.length * 5)
        ].reduce((result, item, i) => {
          const rowIndex = Math.floor(i / 2);
          if (result && result[rowIndex]) {
            result[rowIndex].stories.push(item);
          } else {
            result.push({ stories: [item], index: rowIndex });
          }
          return result;
        }, []);

      return rows;
    }
  },
  mounted() {
    this.pageError = null;
    this.pageLoading = true;
    api.getPage("listing", (err, page) => {
      this.pageLoading = false;
      if (err) {
        this.pageError = err.toString();
      } else {
        this.page = page;
      }
    });

    this.storiesError = null;
    this.storiesLoading = true;
    api.getStories((err, stories) => {
      this.storiesLoading = false;
      if (err) {
        this.storiesError = err.toString();
      } else {
        this.stories = stories;
      }
    });

    this.bannersError = null;
    this.bannersLoading = true;
    api.getBanners((err, banners) => {
      console.log("banners", banners);
      this.bannersLoading = false;
      if (err) {
        this.bannersError = err.toString();
      } else {
        this.banners = banners;
      }
    });

    document.body.classList.remove("bg-white", "text-black");
    document.body.classList.add("bg-black", "text-white");
  },
  methods: {
    isShort() {
      return Math.floor(Math.random() * 10) > 5;
    },
    placeholdersList(length) {
      return Array.from({ length }, (_, i) => ({
        id: `placeholder-${i}`,
        title: this.isShort() ? "***** *****" : "*** ***** ****"
      }));
    }
  }
};
</script>

<style scoped>
.listing-transition-enter-active {
  transition: all 0.35s ease;
}

.listing-transition-leave-active {
  transition: all 0.125s ease;
}

.listing-transition-enter-from,
.listing-transition-leave-to {
  opacity: 0;
}

.listing-list li:nth-child(100),
.listing-list li:nth-child(200),
.listing-list li:nth-child(300),
.listing-list li:nth-child(400),
.listing-list li:nth-child(500),
.listing-list li:nth-child(600) {
  position: relative;

  padding-right: calc(80px + 20px);
}

.listing-list li:nth-child(100):before,
.listing-list li:nth-child(200):before,
.listing-list li:nth-child(300):before,
.listing-list li:nth-child(400):before,
.listing-list li:nth-child(500):before,
.listing-list li:nth-child(600):before {
  position: absolute;
  top: 4px;
  left: 0;
  bottom: 4px;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding-bottom: 2px;

  text-align: right;

  border-bottom: 1px solid rgba(255, 255, 255, 0.6);

  color: #fff;
}

.listing-list li:nth-child(100):before {
  content: "100";
}
.listing-list li:nth-child(200):before {
  content: "200";
}
.listing-list li:nth-child(300):before {
  content: "300";
}
.listing-list li:nth-child(400):before {
  content: "400";
}
.listing-list li:nth-child(500):before {
  content: "500";
}
.listing-list li:nth-child(600):before {
  content: "600";
}

.listing-list::-webkit-scrollbar {
  width: 10px;
}

.listing-list::-webkit-scrollbar-thumb {
  background: #666;
  border-radius: 20px;
}

.listing-list::-webkit-scrollbar-track {
  background: #ddd;
  border-radius: 20px;
}

@media (min-width: 768px) {
  .listing-list li {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

@media screen and (min-width: 1024px) {
  .listing-content:before {
    content: "";
    position: fixed;
    right: 5rem;
    bottom: 0;
    z-index: 20;

    width: 100%;
    height: 10rem;
    max-width: calc((100vw - 160px) / 3 * 2);

    background: linear-gradient(to top, rgba(29, 29, 29, 1), transparent);
  }

  .listing-list li:nth-child(100):before,
  .listing-list li:nth-child(200):before,
  .listing-list li:nth-child(300):before,
  .listing-list li:nth-child(400):before,
  .listing-list li:nth-child(500):before,
  .listing-list li:nth-child(600):before {
    padding-left: calc(100% - 80px);
  }

  .listing-aside {
    max-width: calc((100vw - 160px) / 3);
  }
}

@media screen and (min-width: 1696px) {
  .listing-aside {
    max-width: calc(1536px / 3);
  }
}
</style>
