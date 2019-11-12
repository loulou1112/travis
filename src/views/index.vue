<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links1111</h2>
    <router-link to="/mypage">mypage</router-link>
    <tabbar :tabbar='msg' v-on:mysonmsg='mysonmsg'></tabbar>
  </div>
</template>

<script>
import tabbar from '../component/tabbar.vue'
export default {
  components:{tabbar},
  name: "index",
  data() {
    return {
      msg: "index"
    };
  },
  created:function(){
    console.log(this.$route.query.id,this.$route.query.name)
    
  },
  methods:{
    mysonmsg:function(data){
      console.log(data)
    },
  }
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
