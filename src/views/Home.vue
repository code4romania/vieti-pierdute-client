<template>
  <div>
    <div v-if="loading" class="my-16">
      <Spinner />
    </div>
    <div v-if="post">
      <div
        v-for="component in post.components"
        class="py-7 px-5 md:py-9 md:px-10 lg:px-20"
        v-bind:key="component.id"
      >
        <div class="container max-w-screen-2xl mx-auto">
          <div class="grid grid-cols-8 gap-16">
            <div class="col-span-full lg:col-span-4">
              <div>
                <div>
                  <router-link
                    to="/despre"
                    class="inline-block py-3 font-semibold tracking-widest text-white text-opacity-60 uppercase hover:text-opacity-100"
                    >Despre Proiect</router-link
                  >
                </div>
                <h1 class="mt-12 mb-4 text-8xl font-light lg:text-9xl xl:text-10xl">
                  {{ (+component.victimsCount.victims).toLocaleString() }}
                </h1>
                <h2
                  class="text-5xl py-5 font-light leading-tight lg:text-7xl xl:text-8xl"
                >
                  {{ component.title }}
                </h2>
                <ul
                  v-if="component.buttons"
                  class="mt-2 lg:mt-8 xl:mt-10"
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
              <MadeBy />
            </div>
            <div class="col-span-full lg:col-span-4">
              <p class="text-2xl text-white text-opacity-60  font-normal lg:mt-80 xl:mt-96 ">
                {{ component.content }}
              </p>
            </div>
          </div>
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
  name: "Home",
  components: {
    MadeBy,
    Spinner
  },
  data: () => ({
    loading: false,
    error: null,
    post: {
      components: []
    }
  }),
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchData());
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData();
    next();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      api.get("/pages?slug=home", (err, post) => {
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.post = post;
        }
      });
    }
  }
};
</script>
