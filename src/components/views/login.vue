<template lang="html">
<div>

  <h1>登入页面</h1>
   <input  ype="text" placeholder="账号...">
   <input type="text" placeholder="密码...">
   <a class="a1" v-on:click="click">登入</a>


  </div>
</template>

<script>
import islog from '../../util/index'
export default {
  data() {
    return {
    }
  },
   methods: {
        click(){
            console.log(islog);
            this.islog = true
            console.log(this.islog);
            console.log(islog);


        }
    },

}
</script>

<style lang="css" scoped>
.a1{
  display: block;
  border: 1px solid #123;
  width: 90%;
  height: 2.8rem;
  margin-top: 2rem;
  margin-left:5%;
  text-align: center;
  line-height: 2.8rem;
  font-size: 1.5rem;
  background: rgb(217, 207, 255);

}
input{
  border: 1px solid #123;
  width: 90%;
  height: 2.8rem;
  margin-top: 2rem;
  margin-left:5%;
  
}
</style>
