<template>
  <div>
    <div v-if="storyLoading" class="my-16">
      <Spinner />
    </div>
    <div v-if="story">
      <div class="max-w-screen-2xl mx-auto">
        <div class="grid grid-cols-8 gap-16">
            <div class="col-span-full">
              <div>
                <router-link
                  to="/despre"
                  class="inline-block py-3 font-semibold tracking-widest text-black text-opacity-60 uppercase hover:text-opacity-100"
                >
                  Despre Proiect
                </router-link>
              </div>

              {{story}}
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
