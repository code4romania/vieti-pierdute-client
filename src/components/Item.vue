<template>
  <div class="w-full flex flex-col">
    <div
      class="w-full bg-white text-black p-4 px-8 my-6 text-3xl lg:text4xl leading-snug"
      v-if="banner"
    >
      <div class="text-6xl mb-2">{{ index * 2 }}</div>
      {{ banner.content }}
    </div>
    <div class="flex w-full flex-col md:flex-row" v-if="row">
      <div
        class="md:w-1/2 py-2 text-3xl lg:text2xl leading-relaxed"
        v-for="story in row.stories"
        v-bind:key="story.id"
      >
        <component
          :is="story.isExternal && story.externalLink ? 'a' : story.url ? 'router-link' : 'div'"
          :class="story.url ? 'hover:text-gray-400' : 'text-gray-400'"
          :to="story.url"
          :href="story.externalLink"
          :target="story.isExternal ? '_blank' : '_self'"
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
    },
    index: {
      type: Number,
      default: 0
    }
  }
};
</script>
