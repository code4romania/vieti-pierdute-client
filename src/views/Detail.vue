<template>
  <div>
    <div v-if="storyLoading" class="my-16">
      <Spinner />
    </div>
    <div v-if="story">
      <div class="max-w-screen-2xl mx-auto">
        <div class="grid grid-cols-8 gap-16">
            <div class="col-span-full">
              <div class="p-4 lg:p-8">
                <div class="flex justify-between items-center">
                  <router-link
                    to="/despre"
                    class="inline-block py-3 font-semibold text-base tracking-wide text-black text-opacity-60 hover:text-opacity-100"
                  >
                    Despre proiect
                  </router-link>
                  <a @click="$router.go(-1)" class="cursor-pointer relative w-12 h-12">
                    <span class="absolute top-0 left-0 bottom-0 right-0 m-auto transform origin-center block w-full h-0.5 bg-black rotate-45"></span>
                    <span class="block w-0 h-0 overflow-hidden">Închide</span>
                    <span class="absolute top-0 left-0 bottom-0 right-0 m-auto transform origin-center block w-0.5 h-full bg-black rotate-45"></span>
                  </a>
                </div>

                {{story}}
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
    Spinner,
  },
  name: "Detail",
  data: () => ({
    story: null,
    storyError: null,
    storyLoading: false,
  }),
  mounted() {
    this.storyError = null;
    this.storyLoading = true;
    if(this.$route.params.storyId) {
      api.getStory(this.$route.params.storyId, (err, story) => {
        this.storyLoading = false;
        console.log(err, story)
        if (err) {
          this.storyError = err.toString();
        } else {
          this.story = story;
        }
      });
    }

    document.body.classList.remove("bg-black", "text-white");
    document.body.classList.add("bg-white", "text-black");
  }
};
</script>
