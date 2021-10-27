<template>
  <div>
    <div v-if="loading">loading...</div>
    <div
      class="home flex flex-col flex-1 bg-primary text-white px-5 py-7 md:py-9 md:px-10 lg:px-20"
      v-if="post"
      v-for="component in post.components"
    >
      <div class="max-w-screen-2xl flex-1 md:flex md:flex-row mx-auto">
        <div
          class="flex-initial max-w-screen-2xl md:w-1/2 md:flex md:flex-col lg:w-7/12 lg:pr-6 xl:pr-8 lg:mx-auto"
        >
          <div class="md:flex-1">
            <nav id="nav">
              <router-link
                to="/about"
                class="inline-block py-3 font-semibold tracking-widest text-white text-opacity-60 uppercase"
                >Despre Proiect</router-link
              >
            </nav>
            <h1 class="my-5 py-3 text-7xl font-light lg:text-9xl xl:text-10xl">
              {{ component.victimsCount.victims }}
            </h1>
            <h2
              class="text-5xl py-5 font-light leading-tight lg:text-7xl xl:text-8xl"
            >
              {{ component.title }}
            </h2>
            <ul
              v-if="component.buttons"
              class="mt-2 mb-10 lg:mt-8 xl:mt-10 xl:mb-0"
            >
              <li v-for="button in component.buttons">
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
          <MadeBy class="hidden md:block" />
        </div>
        <div class="flex-initial md:w-1/2 md:self-center lg:w-5/12">
          <p class="text-2xl text-white text-opacity-80 font-normal md:pl-4">
            {{ component.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import api from "@/api";
import MadeBy from "@/components/MadeBy.vue";

export default {
  name: "Home",
  components: {
    MadeBy
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
