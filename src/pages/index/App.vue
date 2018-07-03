<template>
  <div id="app">
    <img src="./assets/logo.png">
      index测试页面
      <div>
        {{data.inPlayRefundReason}}
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      data: ''
    }
  },
  created () {
    axios.get('/wap/match/bets/').then(res => {
      this.data = res.data.data
      console.log(res)
    })
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
