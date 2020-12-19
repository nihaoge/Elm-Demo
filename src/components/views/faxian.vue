<template lang="html">
<div>
  <h1>发现页面</h1>
   <span>用户名: </span>
  <span v-text='$store.state.userinfo.name'></span><br>
    <span>等级: </span>
    <span v-text='$store.state.count'></span>
    <span style="margin-left:4rem">音乐列表长度: </span>
    <span v-text='$store.state.musicList.length'></span>

  <div class="box">
    <router-link to="/faxian/fax1" tag="div" active-class="on">美食</router-link>
    <router-link to="/faxian/fax2" tag="div" active-class="on">商铺</router-link>
  </div>
 
  <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.box{
  width: 100%;
  margin-top:2rem;
  font-size: 1.8rem;
  /* border: 1px #123 solid; */

}
.box div {
  width:50%;
  display: inline-block;
  box-sizing:border-box;
  border: #123 solid 2px;
  text-align: center;
  
}
span{
  
font-size: 2rem;
}
</style>
