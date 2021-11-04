<template>
  <div class="flex">
    <input type="checkbox" :id="name" v-model="this.value" />
    <div>
      <label :for="name"> <slot></slot> </label>
    </div>
  </div>
  <InputError v-for="message in error">{{ message }}</InputError>
</template>

<script>
import InputError from './InputError';
export default {
  name: "Checkbox",
  components: {
    InputError
  },
  props: {
    name: {
      type: String
    },
    modelValue: {
      type: Boolean
    },
    error: {
      type: Array
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
