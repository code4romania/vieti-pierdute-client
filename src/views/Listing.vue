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
                      class="inline-block py-3 px-2 font-semibold text-sm tracking-widest text-white text-opacity-60 uppercase hover:text-opacity-100"
                    >
                      Despre Proiect
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
                      :class="{ 'opacity-60 border-r-0': listView }"
                    >
                      Galerie
                    </button>
                    <button
                      class="inline-block border border-white p-3 text-base leading-4 uppercase font-thin tracking-widest"
                      :class="{ 'opacity-60 border-l-0': galleryView }"
                    >
                      Listă
                    </button>
                  </div>

                  <MadeBy class="hidden lg:block" />
                </div>
              </div>
            </div>
            <div class="col-span-full lg:col-span-5">
              <transition v-if="listView" name="listing-transition">
                <ul
                  v-if="storiesList.length > 0"
                  class="listing-list md:flex md:flex-row md:flex-wrap lg:pb-40"
                >
                  <template v-for="(story, index) in storiesList" v-bind:key="story.id">
                    <div class="w-full bg-white text-black text-center py-2 my-6 text-5xl lg:text4xl leading-relaxed" v-if="banners[index]">
                      {{ banners[index].text }}
                    </div>
                    <li class="md:w-1/2 py-2 text-2xl leading-snug">
                      <component
                        :is="story.url ? 'router-link' : 'div'"
                        :class="story.url ? 'hover:text-gray-400' : 'text-gray-400'"
                        :to="story.url"
                        >{{ story.title }}
                      </component>
                    </li>
                  </template>
                </ul>
                <div
                  v-else
                  class="flex flex-col justify-center align-middle h-full"
                >
                  <Spinner />
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import shuffle from "@/lib/shuffle";
import MadeBy from "@/components/MadeBy.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "Listing",
  components: {
    MadeBy,
    Spinner
  },
  data: () => {
    return {
      listView: true,
      galleryView: false,
      stories: [],
      storiesError: null,
      storiesLoading: false,
      page: null,
      pageError: null,
      pageLoading: false,
      banners: {
        120: {
          text: "banner index 120"
        },
        230: {
          text: "banner index 230"
        },
        460: {
          text: "banner index 460"
        },
        850: {
          text: "banner index 850"
        },
        1200: {
          text: "banner index 1200"
        },
        1600: {
          text: "banner index 1600"
        },
        2300: {
          text: "banner index 2300"
        }
      }
    };
  },
  computed: {
    storiesList: function() {
      const victimsCount =
        this.page && +this.page.components[0].victimsCount.victims;
      const list = this.stories.map(story => ({
        id: story.id,
        title: `${story.victimLastName} ${story.victimFirstName}`,
        url: `/poveste/${story.id}`
      }));
      if (victimsCount) {
        return shuffle([
          ...list,
          ...this.placeholdersList(victimsCount - list.length)
        ]);
      }
      return this.placeholdersList(100);
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

.listing-list li:nth-child(100):before ,
.listing-list li:nth-child(200):before ,
.listing-list li:nth-child(300):before ,
.listing-list li:nth-child(400):before ,
.listing-list li:nth-child(500):before ,
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

.listing-list li:nth-child(100):before { content: "100"; }
.listing-list li:nth-child(200):before { content: "200"; }
.listing-list li:nth-child(300):before { content: "300"; }
.listing-list li:nth-child(400):before { content: "400"; }
.listing-list li:nth-child(500):before { content: "500"; }
.listing-list li:nth-child(600):before { content: "600"; }

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

  .listing-list li:nth-child(100):before ,
  .listing-list li:nth-child(200):before ,
  .listing-list li:nth-child(300):before ,
  .listing-list li:nth-child(400):before ,
  .listing-list li:nth-child(500):before ,
  .listing-list li:nth-child(600):before {
    padding-left: calc(100% - 80px);
  }

  .listing-aside {
    max-width: calc((100vw - 160px) / 3);
  }
}

@media screen and (min-width: 1696px) {

  .listing-aside {
    max-width: calc(1536px/3);
  }
}
</style>
