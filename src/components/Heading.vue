<script>
import { h } from "vue";

const fontSize = (level)=>{
  if(level === 1){
    return 'font-light text-5xl lg:text-7xl xl:text-8xl'
  } else if (level === 2){
    return 'text-3xl'
  }
}
export default {
  name: "Heading",
  render() {
    return h(
      "h" + this.level, // tag name
      {
        class: 'relative inline-block leading-tight  my-5 py-3 text-3xl ' + fontSize(this.level)
      }, // props/attributes
      this.$slots.default() // array of children
    );
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
};
</script>
