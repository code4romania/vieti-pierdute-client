<template>
  <div class="w-full flex flex-col">
    <div
      class="w-full bg-white text-black text-center py-2 my-6 text-5xl lg:text4xl leading-relaxed"
      v-if="banner"
    >
      {{ banner.content }}
    </div>
    <div class="flex w-full flex-col md:flex-row" v-if="row">
      <div
        class="md:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed"
        v-for="story in row.stories"
        v-bind:key="story.id"
      >
        <component
          :is="story.url ? 'router-link' : 'div'"
          :class="story.url ? 'hover:text-gray-400' : 'text-gray-400'"
          :to="story.url"
          >{{ story.title }}
        </component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    row: {
      type: Object,
      default: {
        stories: []
      }
    },
    banner: {
      type: Object,
      default: null
    }
  }
};
</script>
