<template>
  <div>
    <a :href="link">{{ text }}</a>
  </div>
</template>

<script>
import VueTest from '../vue-test.vue'
export default {
  components: {
    // VueTest
  },
  props: {
    link: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  a {
    color: red;
  }
}
</style>
