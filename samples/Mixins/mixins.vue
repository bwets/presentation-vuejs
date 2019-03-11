<!-- mixins.vue -->
<template>
  <div>{{ messages }}</div>
</template>

<script >
import Hello from "./hello";
import Welcome from "./welcome";

export default {
  mixins: [Hello, Welcome],
  data: {
    name: "Dave",
    place: "space"
  },
  props: {
    messages: function() {
      return this.sayHello(this.name) + ", " + this.sayWelcome(this.place);

      // Hello Dave, Welcome in space
    }
  }
};

/////////////////////////////////////////////

import Component, { mixins } from "vue-class-component";
import Hello from "./hello";
import Welcome from "./welcome";

@Component
export class SampleComponent extends mixins(Hello, Welcome) {
  get message() {
    return this.sayHello(this.name) + ", " + this.sayWelcome(this.place);
    // Hello Dave, Welcome in space
  }
}
</script>
