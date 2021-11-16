<template>
  <div class="p-4 lg:p-8">
    <div>
      <router-link
        to="/despre"
        class="inline-block py-3 px-2 font-semibold text-base tracking-wide text-white text-opacity-60 hover:text-opacity-100"
      >
        Despre proiect
      </router-link>
    </div>

    <router-link
      to="/"
      class="relative inline-block my-5 py-3 pl-14 text-7xl font-normal"
      v-if="title"
    >
      <span
        class="absolute left-2 top-0 bottom-0 my-auto transform rotate-45 w-9 h-9 border-l-2 border-b-2 border-white"
      ></span>
      {{ title }}
    </router-link>

    <p class="mb-8 text-2xl font-thin text-white text-opacity-80">
      {{ content }}
    </p>

    <ul v-if="buttons" class="mb-8">
      <li v-for="button in buttons" v-bind:key="button.id">
        <router-link
          v-if="button.href"
          :to="button.href"
          class="inline-block py-3 text-2xl font-normal lg:text-xl xl:text-2xl"
          ><span class="underline">{{ button.text }}</span></router-link
        >
      </li>
    </ul>

    <div class="lg:mb-16">
      <Switch :list="list" :gallery="gallery" @switchView="onSwitchView" />
    </div>

    <MadeBy class="hidden lg:block" />
  </div>
</template>

<script>
import Switch from "./Switch";
import MadeBy from "./MadeBy";

export default {
  name: "Jumbotron",
  components: { Switch, MadeBy },
  props: {
    title: {
      type: String
    },
    content: {
      type: String
    },
    buttons: {
      type: Array
    },
    onSwitchView: {
      type: Function
    },
    list: {
      type: Boolean
    },
    gallery: {
      type: Boolean
    }
  }
};
</script>
