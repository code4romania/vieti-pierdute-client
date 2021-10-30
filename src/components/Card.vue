<template>
  <div class="w-full flex flex-col">
    <div
      v-if="row"
      class="my-10 text-center py-2 leading-relaxed"
      v-for="story in row.stories"
    >
      <div class="text-base uppercase opacity-60 mb-4">{{ story.address }}</div>
      <div :class="story.url ? 'text-6xl' : 'text-4xl text-gray-400'">
        {{ story.title }}
        <span v-show="story.age">, {{ story.age }}</span>
      </div>
      <div v-show="story.occupation" class="text-2xl mt-2.5">{{ story.occupation }}</div>
      <router-link v-if="story.url" class="block text-xl hover:text-gray-400 mt-4" :to="story.url">
        Citeste mai mult
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    row: {
      type: Object,
      default: null
    }
  }
};
</script>
