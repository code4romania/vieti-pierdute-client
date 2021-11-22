<template>
  <div>
    <label>{{ this.label }}</label>
    <!-- TODO: handle type textarea with h-32 additional class -->
    <input
      :type="this.type"
      class="appearance-none block text-lg w-full bg-transparent border-b mt-4 pb-2 border-gray-500 focus:outline-none focus:border-white placeholder-gray-700"
      :name="this.name"
      :min="this.min"
      :max="this.max"
      :step="this.step"
      :placeholder="this.placeholder"
      v-model="this.value"
    />
    <InputError
      v-for="(message, index) in error"
      v-bind:key="'error-' + index"
    >{{ message }}</InputError>
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
