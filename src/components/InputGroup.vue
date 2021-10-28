<script>
import { h } from "vue";

export default {
  name: "InputGroup",
  render() {
    return h(
        "div",
        {
          class: 'grid gap-8 grid-cols-1 mb-7' + (!this.fullWidth ? ' sm:grid-cols-2': '')
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
