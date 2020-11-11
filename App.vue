<template>
  Count: {{ count }}
  <button @click="incr">Increment</button>
</template>

<script>
export default {
  methods: {
    incr() {
      this.$store.commit('increment', Math.random())
    }
  },
  //here's how you access vuex store
  computed: {
    count() {
      return this.$store.state.count
    }
  },
}
</script>

<style scoped>

</style>