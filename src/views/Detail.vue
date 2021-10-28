<template>
  <div class="flex flex-col flex-1 bg-white text-black px-5 py-7 md:py-9 md:px-10 lg:px-20">
    <div class="relative flex-1 max-w-screen-2xl lg:mx-auto">
      <div>
        <router-link
          to="/despre"
          class="inline-block py-3 font-semibold tracking-widest text-black text-opacity-60 uppercase hover:text-opacity-100"
        >
          Despre Proiect
        </router-link>
      </div>

      test
    </div>
  </div>
</template>

<script>
import Heading from "../components/Heading";
import MadeBy from "../components/MadeBy";

export default {
  components: {
    Heading,
    MadeBy
  },
  name: "Detail",
  data: () => ({
    key: "value"
  }),
  methods: {
    
  }
};
</script>
