<template>

  <div class="listing flex flex-1 bg-primary text-white px-5 py-7 md:py-9 md:px-10 lg:px-20 lg:py-0">
    <div class="flex flex-col flex-1 max-w-screen-2xl lg:mx-auto">
      <div class="flex-1 lg:flex ">
        <div class="lg:w-1/3">
          <div class="listing-aside lg:fixed flex flex-col h-full lg:py-9">
            <div class="mb-6 lg:mb-0 flex-1">
              <div id="nav">
                <router-link
                  to="/despre"
                  class="inline-block py-3 font-semibold tracking-widest text-white text-opacity-60 uppercase"
                >
                  Despre Proiect
                </router-link>
              </div>

              <router-link
                to="/"
                class="relative inline-block my-5 py-3 pl-14 text-7xl font-normal"
              >
                <span class="absolute left-2 top-0 bottom-0 my-auto transform rotate-45 w-9 h-9 border-l-2 border-b-2 border-white"></span>
                {{formatNumber(numberDeceased)}}
              </router-link>

              <p class="mb-4 lg:mb-16 text-2xl font-thin text-white text-opacity-80">This is a content area describing the web purpose and what users will find on it. It is cool to keep it short but explanatory</p>

              <div class="mb-8 hidden lg:block">
                <button class="inline-block border border-white p-3 text-base leading-4 uppercase font-thin tracking-widest" :class="{'opacity-60 border-r-0': list}">Galerie</button>
                <button class="inline-block border border-white p-3 text-base leading-4 uppercase font-thin tracking-widest" :class="{'opacity-60 border-l-0': gallery}">Listă</button>
              </div>

              <router-link
                to="/adauga-o-poveste"
                class="lg:block inline-block mb-2 py-3 underline text-2xl font-normal lg:text-xl lg:mb-4"
              >
                Adaugă povestea cuiva drag
              </router-link>
            </div>
            <MadeBy class="hidden lg:block"/>
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
                    to=""
                    class="hover:text-gray-400"
                  >
                    {{story.victimFirstName + ' ' + story.victimLastName}}
                  </router-link>
                </li>
              </template>
              <!-- <li class="md:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed text-gray-400">*** ****** ******</li> -->
            </ul>
            <div v-else class="flex flex-col justify-center align-middle h-full">
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
import numeral from "numeral";
import axios from "axios";

import MadeBy from "@/components/MadeBy.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "Listing",
  components: {
    MadeBy,
    Spinner
  },
  props: {
    numberDeceased: {
      type: Number,
      default: 0
    }
  },
  data: () => {
    return {
      list: true,
      gallery: false,
      stories: []
    }
  },
  computed: {
    wrappedStories () {

      return [1, 2, 3]
    }
  },
  mounted() {
    axios.get(process.env.VUE_APP_API + "/stories").then((response) => {
      this.stories = response.data
    })
  },
  methods: {
    dottedName() {
      return "*** ****** ******"
    },
    formatNumber(value) {
      return numeral(value).format("0,0");
    }
  }
}
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
