<template>
  <div
    class="fixed w-full h-full top-0 left-0 flex items-center justify-center z-50"
  >
    <div v-if="storyLoading" class="my-16">
      <Spinner />
    </div>
    <div
      class="fixed w-full h-full z-50 overflow-y-auto max-w-screen-2xl mx-auto bg-white text-black"
      v-if="story"
    >
      <div class="grid grid-cols-8">
        <div class="col-span-full">
          <div class="p-4 lg:p-8">
            <div class="flex justify-between items-center mb-8">
              <router-link
                to="/povesti"
                class="inline-block py-3 font-semibold text-base tracking-wide text-gray-400 hover:underline"
              >
                Despre proiect
              </router-link>
              <a
                @click="$router.go(-1)"
                class="cursor-pointer relative w-12 h-12"
              >
                <span
                  class="absolute top-0 left-0 bottom-0 right-0 m-auto transform origin-center block w-full h-0.5 bg-black rotate-45"
                ></span>
                <span class="block w-0 h-0 overflow-hidden">Închide</span>
                <span
                  class="absolute top-0 left-0 bottom-0 right-0 m-auto transform origin-center block w-0.5 h-full bg-black rotate-45"
                ></span>
              </a>
            </div>

            <div class="max-w-4xl mb-32">
              <div
                class="relative block w-full leading-tight font-light mt-5 pt-3 mb-2 pb-0 text-5xl lg:text-7xl"
              >
                <div class="mb-2">
                  {{
                    story.victimFirstName +
                      " " +
                      story.victimLastName +
                      ", " +
                      story.age
                  }}
                </div>
                <div class="mb-8 text-xl">
                  <div class="inline-block">{{ story.occupation }}</div>
                  <div class="inline-block mx-2 text-gray-400">&#9679;</div>
                  <div class="inline-block tracking-wide text-gray-400">
                    {{ story.county }}, {{ story.city }}
                  </div>
                </div>
              </div>
              <!-- <a @click="$router.go(-1)" class="cursor-pointer">
                      <span
                        class="absolute left-0 top-0 bottom-0 my-auto transform rotate-45 w-9 h-9 border-l-2 border-b-2 border-white"
                      ></span>
                    </a> -->

              <div class="mb-8 filter grayscale max-w-2xl">
                <!-- NEED HELP HERE: For some reason process.env.VUE_APP_API won't render here, tried a computed value also, process.env is an empty object in that case -->
                <!-- {{process.env.VUE_APP_API}} -->
                <!-- <img :src="'http://localhost:1337' + story.image.url"> -->
                <img src="https://picsum.photos/id/1005/900/450" />
              </div>

              <!-- TODO: we should render the markdown here -->
              <div class="text-lg leading-relaxed">{{ story.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";

import Heading from "../components/Heading";
import MadeBy from "../components/MadeBy";
import Spinner from "../components/Spinner";

export default {
  components: {
    Heading,
    MadeBy,
    Spinner
  },
  name: "Detail",
  data: () => ({
    story: null,
    storyError: null,
    storyLoading: false
  }),
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.story = null;
      this.storyError = null;
      this.storyLoading = true;
      if (this.$route.params.storyId) {
        // document.body.classList.remove("bg-black", "text-white");
        // document.body.classList.add("bg-white", "text-black");
        api.getStory(this.$route.params.storyId, (err, story) => {
          this.storyLoading = false;
          if (err) {
            this.storyError = err.toString();
          } else {
            this.story = story;
          }
        });
      }
    }
  }
};
</script>
