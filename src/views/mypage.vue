<template>
  <div class="mypage">
    this is mypage
    <router-link to="/inner">go to inner</router-link>
    <div class="area">
      <input type="text" v-model="msg" />
      <div v-for="item in data">
        1{{item}}
        <router-link :to="{name:'index',query:{id:item}}">{{item}}</router-link>
        <!-- <img :alt="item.id" :src="item.image" /> -->
      </div>
    </div>
    <tabbar :tabbar="msg" v-on:mysonmsg="mysonmsg"></tabbar>
  </div>
</template>

<script>
import tabbar from "../component/tabbar.vue";
export default {
  components: { tabbar },
  name: "index",
  data() {
    return {
      msg: "Wel",
      text: "",
      data: ""
    };
  },
  created: function() {
    // this.$http.post('/auth_api/index.html',{}).then(function(res){
    //   console.log(res)
    // })
    let that = this;
    this.$http(
      "/json/json.json",
      function(res) {
        that.data = res.data;
      },
      { dd: 1, bl: 0 }
    );
  },
  mounted() {
    // document.dispatchEvent(new Event("render-event"));
  },
  methods: {
    mysonmsg: function(data) {
      console.log(data, this.msg);
    },
    goback: function() {
      this.$router.go(-1); //返回上一页
    },
    goinner: function() {
      this.$router.push("/inner");
    }
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
.area {
  width: 500px;
  height: 500px;
  border: 3px solid black;
  margin: 0 auto;
}
</style>
