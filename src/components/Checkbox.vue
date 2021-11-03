<template>
  <div class="relative flex items-start">
    <div class="flex items-center h-5">
      <input
        :id="name"
        :name="name"
        type="checkbox"
        class="focus:ring-white h-4 w-4 text-white border-gray-300 rounded"
        v-model="this.value"
      >
    </div>
    <div class="ml-3 text-base">
      <label :for="name" class="font-medium text-white">
        <slot></slot>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    name: {
      type: String
    },
    modelValue: {
      type: Boolean
    }
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  }
};
</script>
