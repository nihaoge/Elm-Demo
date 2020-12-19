<template lang="html">
<div class="wode">
<h1>我的页面</h1>
  <span>用户名: </span>
  <span v-text='$store.state.userinfo.name'></span><br>
    <span>等级: </span>
    <span v-text='$store.state.count'></span>
     <span style="margin-left:4rem">音乐列表长度: </span>
    <span v-text='$store.state.musicList.length'></span>
    <button type="button" name="buttom" @touchstart="updateCount">点我增加等级</button>
     <button type="button" name="buttom" @touchstart="getMusic">获取音乐列表</button>
     <button type="button" name="buttom" @touchstart="reMusic">删除音乐列表</button>

    
     
<router-link to="/money" tag="h2" active-class="on">点击查看我的余额</router-link>

 <div v-for='(item,idx) in $store.state.musicList' :key='idx'>
<p v-text="item.title"></p>
</div>
  
 

  </div>
</template>

<script>

export default {


  //钩子函数,自动执行
  // mounted() {
  //   this.$store.dispatch('fatchMusics')
  // },


  methods:{
    updateCount(){
      //提交到store.js,触发store中add方法
      this.$store.commit('add',1)
     },
     getMusic(){
       //派发fatchMusic接口
       this.$store.dispatch('fatchMusics')
     },
     reMusic(){
       this.$store.commit('mMusic')

     }

  }
}
</script>

<style lang="css" scoped>
/* scoped代表css只在这个页面有效 */
p{
  font-size: 1.5rem;
  font-weight: 900;
  margin-left:0%;
  border-bottom: 1px solid #123;
  margin-top:1rem;
}
span{
  
font-size: 1.5rem;
}
.wode h2{
  margin-top:1rem;
}
button{
  width: 45%;
  font-size: 1.5rem;
  margin-left:0.5rem;
  margin-top:1rem;


}
</style>
