<template>

  <div class="flex flex-col flex-1 bg-black text-white px-5 py-7 md:py-9 md:px-10 lg:px-20">
    <div
      v-if="page"
      class="flex flex-col flex-1 max-w-screen-2xl lg:mx-auto"
    >
      <div
        class="flex-1 lg:flex "
        v-for="component in page.components"
        v-bind:key="component.id"
      >
        <div class="lg:w-1/3">
          <div class="listing-aside lg:fixed flex flex-col h-full lg:py-9">
            <div class="mb-6 lg:mb-0 flex-1">
              <div>
                <router-link
                  to="/despre"
                  class="inline-block py-3 font-semibold tracking-widest text-white text-opacity-60 uppercase hover:text-opacity-100"
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
                class="mb-4 lg:mb-16 text-2xl font-thin text-white text-opacity-80"
              >
                {{ component.content }}
              </p>

              <div class="mb-8 hidden lg:block">
                <button
                  class="inline-block border border-white p-3 text-base leading-4 uppercase font-thin tracking-widest"
                  :class="{ 'opacity-60 border-r-0': list }"
                >
                  Galerie
                </button>
                <button
                  class="inline-block border border-white p-3 text-base leading-4 uppercase font-thin tracking-widest"
                  :class="{ 'opacity-60 border-l-0': gallery }"
                >
                  Listă
                </button>
              </div>

              <ul
                  v-if="component.buttons"
                  class="mt-2 mb-10 lg:mt-8 xl:mt-10 xl:mb-0"
              >
                <li v-for="button in component.buttons" v-bind:key="button.id">
                  <router-link
                      v-if="button.href"
                      :to="button.href"
                      class="inline-block mb-2 py-3 text-2xl font-normal lg:text-2xl xl:text-3xl lg:mb-4"
                  ><span class="underline">{{ button.text }}</span
                  ><span class="pl-4">&#8594;</span></router-link
                  >
                </li>
              </ul>
            </div>
            <MadeBy class="hidden lg:block" />
          </div>
        </div>
        <div class="listing-content lg:relative lg:pl-12 lg:w-2/3">
          <transition name="listing-transition">
            <ul
              v-if="stories.length > 0"
              class="listing-list md:flex md:flex-row md:flex-wrap lg:py-8 lg:pb-40"
            >
              <template v-for="story in stories" v-bind:key="story.id">
                <li class="md:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed">
                  <router-link
                    :to="`${'/poveste/' +  + story.id }`"
                    class="hover:text-gray-400"
                  >
                    {{story.victimFirstName + ' ' + story.victimLastName}}
                  </router-link>
                </li>
              </template>
              <!-- <li class="md:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li> -->
            </ul>
            <div
              v-else
              class="flex flex-col justify-center align-middle h-full"
            >
              <Spinner />
            </div>
          </transition>
          <!-- <transition name="listing-transition">
            <div v-show="gallery">
              <ul>
                <li>max max max super max max super super max max max super max max</li>
              </ul>
            </div>
          </transition> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
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
      list: true,
      gallery: false,
      stories: [],
      storiesError: null,
      storiesLoading: false,
      page: null,
      pageError: null,
      pageLoading: false
    };
  },
  computed: {
    wrappedStories() {
      return [1, 2, 3];
    }
  },
  mounted() {
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
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchPage());
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchPage();
    next();
  },
  methods: {
    dottedName() {
      return "*** ****** ******";
    },
    fetchPage() {
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
