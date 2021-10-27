<template>
  <div class="flex">
    <input type="checkbox" :id="name" v-model="this.value" />
    <div>
      <label :for="name"> <slot></slot> </label>
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
