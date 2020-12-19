<template>

  <div id="app">
   <!--  <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 路由 -->
    <router-view></router-view>
     <footer>
                <!-- <a href="#/elm">首页</a>
                <a href="#/faxian">发现</a>
                <a href="#/dindan">订单</a>
                <a href="#/wode">我的</a> -->
                <router-link to="/elm" tag="span" active-class="on">首页</router-link>
                <router-link to="/faxian" tag="span" active-class="on">发现</router-link>
                <router-link to="/dindan" tag="span" active-class="on">订单</router-link>
                <router-link to="/wode" tag="span" active-class="on">我的</router-link>



        </footer> 
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import elm from "./components/elm"



export default {
  name: 'app',
  components: {
    // HelloWorld
    // elm
  },
 
}
</script>

<style>
h1{
  text-align: center;
  font-size: 5rem;

}

footer {
    position: fixed;

    bottom: 0px;
    z-index: 999;
    height: 3.5rem;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ffd4d4;
    width: 100%;
}
 footer span{
    width: 25%;
    height: 100%;
    text-align: center;
    line-height: 3.5rem;
    font-size: 1rem;
    color: #123
    
}
.on{
  font-weight: 900;
  color: red;
  font-size: 1.5rem;
  background: rgb(255, 174, 174);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

   width: 100%;
            height:100%; 
 
    
}
 *{
          margin: 0;
          padding:0;
        }
       html,body{
           width: 100%;
            height:100%; 

       }
         

</style>
