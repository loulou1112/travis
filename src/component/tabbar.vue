<template>
  <div class="tabbar">
    <input type="text" v-model="inputvalue" @blur="sendmsg()" />
    <router-link class="bar" to="/">
      <div>index</div>
    </router-link>
    <router-link class="bar" to="/mypage">
      <div>mypage</div>
    </router-link>
    <router-link class="bar" to="/inner">
      <div>inner</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["tabbar"],
  name: "tabbar",
  data() {
    return {
      inputvalue: this.tabbar
    };
  },
  created: function() {
  },
  methods: {
    sendmsg: function() {
      this.$emit("mysonmsg", this.inputvalue);
    }
  },
  watch:{
    tabbar(){
      this.inputvalue=this.tabbar
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.tabbar {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  .bar {
    flex: 1;
    height: 100px;
    // border: 4px solid blueviolet;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
