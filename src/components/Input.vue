<template>
  <div>
    <label>{{ this.label }}</label>
    <input
      class="appearance-none block w-full bg-transparent border-b mt-4"
      :name="this.name"
      :placeholder="this.placeholder"
      v-model="this.value"
    />
    <InputError v-for="message in error">{{ message }}</InputError>
  </div>
</template>

<script>
import InputError from './InputError';

export default {
  name: "Input",
  components: {
    InputError
  },
  props: {
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: "text"
    },
    min: {
      type: String
    },
    max: {
      type: String
    },
    step: {
      type: String
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
