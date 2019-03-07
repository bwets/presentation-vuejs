<!-- extend.vue -->
<script >
import Base from "./base";

export default {
  extends: Base,
  props: {
    message: function(){
      return "Hello Dave, I'm HAL"
    }
  }
};
</script>
