<template>
          <!-- 内容组件 -->
            
              <div class="nav-main">
                  <div class="nav-top">
                      <div class="nav-img"><img src="../assets/img/123.gif" alt="" srcset=""></div>
                      <div class="nav-text" >
                        <span style="font-weight: 900;" v-text='art.restaurant.name'></span>
                        <span v-text='art.restaurant.piecewise_agent_fee.description'></span>
                        

                      </div>
                  </div>
                  <div class="nav-z">
                    
                        <span v-text='art.restaurant.description'></span>

                  </div>
                  <!-- <div class="nav-foot"></div> -->

              </div>
              
</template>

<script>

export default {
 props:{
   art:{
     type:Object,
     required:true
   }
 }
 


};
</script>

<style>

nav{
    width: 100%;
    height: 100%;
}
nav .nav-main{
    width: 100%;
    height: 11.666667rem;
    background: rgb(255, 255, 255);
    border-top:2px solid #ff0707;
    border-bottom:2px solid #ff0000;

}
.nav-img{
  width: 50%;
}
.nav-img img{
  height:85%;
  margin-left:1.5rem;
}
.nav-text{
  width: 50%;

}
.nav-top{
    height: 49%;
    width: 100%;
    background: rgb(255, 255, 255);
    display: flex;
}
.nav-z{
    height: 14%;
    width: 100%;

    background: rgb(255, 255, 255);
}
/* .nav-foot{
    height: 37%;
    width: 100%;

    background: rgb(183, 238, 121);
} */





@media all and (max-width: 320px) {
  html {
    font-size: 12px;
  }
}
@media all and (min-width: 321px) and (max-width: 376px) {
  html {
    font-size: 14px;
  }
}
@media all and (min-width: 377px) {
  html {
    font-size: 16px;
  }
}
</style>
    