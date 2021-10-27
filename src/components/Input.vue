<template>
  <div>
    <label>{{ this.label }}</label>
    <input
      class="appearance-none block w-full bg-transparent border-b mt-4"
      :name="this.name"
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
