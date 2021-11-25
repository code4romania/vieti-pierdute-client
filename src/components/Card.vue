<template>
  <div class="w-full flex flex-col">
    <div v-if="row">
      <div
        class="my-10 text-center py-2 px-4 lg:px-16 leading-relaxed"
        v-for="story in row.stories"
        v-bind:key="'story-' + story.id"
      >
        <div class="text-base uppercase opacity-60 mb-4">{{ story.address }}</div>
        <component
          :is="story.isExternal && story.externalLink ? 'a' : story.url ? 'router-link' : 'div'"
          :class="story.url ? 'hover:text-gray-400' : 'text-gray-400'"
          :to="story.url"
          :href="story.externalLink"
          :target="story.isExternal ? '_blank' : '_self'"
        >
          <div class="text-6xl">
            {{ story.title }}<span v-show="story.age" class=" font-thin">, {{ story.age }}</span>
          </div>
        </component>
        <div v-show="story.occupation" class="text-2xl mt-2.5">{{ story.occupation }}</div>
      </div>
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
