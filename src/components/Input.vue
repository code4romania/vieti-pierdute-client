<template>
  <div>
    <label>{{ this.label }}</label>
    <!-- TODO: handle type textarea with h-32 additional class -->
    <input
      :type="this.type"
      class="appearance-none block text-lg w-full bg-transparent border-b mt-4 pb-2 border-gray-500 focus:outline-none focus:border-white"
      :name="this.name"
      :min="this.min"
      :max="this.max"
      :step="this.step"
      :placeholder="this.placeholder"
      v-model="this.value"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
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
      default: 'text'
    },
    min: {
      type: String
    },
    max: {
      type: String
    },
    step: {
      type: String
    }
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
};
</script>
