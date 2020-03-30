<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ count }}</h2>
    <button @click="add">增加</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed:{
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['setCount']),
    add() {
      this.setCount(12)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
