<script>
import { h } from "vue";

export default {
  name: "InputGroup",
  render() {
    return h(
        "div",
        {
          class: 'grid gap-8 grid-cols-1 gap-4 sm:gap-16 mb-7' + (!this.fullWidth ? ' sm:grid-cols-4 relative': '')
        },
        this.$slots.default()
    );
  },
  props: {
    fullWidth: {
      type: Boolean
    }
  }
};
</script>
