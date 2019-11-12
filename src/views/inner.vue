<template>
  <div class="inner">
    this is inner page
    <div v-for="item in list">{{item.name}}</div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../component/tabbar.vue";
export default {
  components: { tabbar },
  name: "inner",
  data() {
    return {
      list: [
        { name: "41242" },
        { name: "东方va" },
        { name: "不错V选择" },
        { name: "特务" },
        { name: "赶飞机" },
        { name: "I一天光" },
        { name: "vc性能" },
        { name: "也让" },
        { name: "vc显示的" },
        { name: "65cv4x" }
      ]
    };
  },
  created: function() {},
  mounted() {
    // document.dispatchEvent(new Event("render-event"));
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
