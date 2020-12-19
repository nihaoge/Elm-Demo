<template>

<div boos-box>

  <div class="head">
    <div class="map-top">
      <p class="top-p">➤中华人民共和国▾</p>
    </div>
    <div class="inp">
      <input type="text" placeholder=" 搜索阳光川味" />
    </div>
  </div>
  <section>
      <main>
          <figure>
              <div class="nav-box">
                  <a href="#"><div class="img-box"><img src="../assets/img/1 (1).webp" alt="" srcset=""></div><span align="center" class="text">饿了么</span></a>
                  <a href="#"><div class="img-box"><img src="../assets/img/1 (6).webp" alt="" srcset=""></div><span align="center" class="text">饿了么</span></a>
                  <a href="#"><div class="img-box"><img src="../assets/img/1 (7).webp" alt="" srcset=""></div><span align="center" class="text">饿了么</span></a>
                  <a href="#"><div class="img-box"><img src="../assets/img/1 (8).webp" alt="" srcset=""></div><span align="center" class="text">饿了么</span></a>
                  <a href="#"><div class="img-box"><img src="../assets/img/1 (9).webp" alt="" srcset=""></div><span align="center" class="text">饿了么</span></a>
              </div>
             <div class="nav-box">
                  <a href="#"><div class="img-box"><img src="../assets/img/1 (10).webp" alt="" srcset=""></div><span align="center" class="text">饿了么</span></a>
                  <a href="#"><div class="img-box"><img src="../assets/img/1 (11).webp" alt="" srcset=""></div><span align="center" class="text">饿了么</span></a>
                  <a href="#"><div class="img-box"><img src="../assets/img/1 (12).webp" alt="" srcset=""></div><span align="center" class="text">饿了么</span></a>
                  <a href="#"><div class="img-box"><img src="../assets/img/1 (13).webp" alt="" srcset=""></div><span align="center" class="text">饿了么</span></a>
                  <a href="#"><div class="img-box"><img src="../assets/img/1 (14).webp" alt="" srcset=""></div><span align="center" class="text">饿了么</span></a>
              </div>
          </figure>
          <article>
              <div class="art-box">
                  <div class="art-box1">
                      <p style=" font-weight:900;margin-top:1rem;margin-left:.6rem;">品质套餐</p>
                      <p style=" font-size:.96rem;margin-top:.4rem;margin-left:.6rem;color:#878787">搭配期权,吃的好</p>
                      <p style=" font-weight:900;font-size:.76rem;margin-top:.4rem;margin-left:.6rem;color:#a47e5d">立即抢购 ></p>
                  </div>
                  <div  class="art-box1"><img src="https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed" alt=""></div>

              </div>

          </article>
          <div class="text-nav">— 食品推荐 —</div>
          <div class="nav-nav">
              <div class="nav-a"><span>综合排序⇩</span></div>
              <div class="nav-a"><span>离我最近</span></div>
              <div class="nav-a"><span>品质联盟</span></div>
              <div class="nav-a"><span>筛选▽</span></div>
          </div>
          <!-- 内容区 -->
          <nav>
                <div v-for="(item,idx) in dataA" :key= 'idx'> 
                  <elmNav :art='item'></elmNav>
                </div>
    
              

          </nav>
    
      </main>
    
  </section>

 
  </div>
</template>

<script>
import elmNav from "./eleNav"
import axios from 'axios'


export default {
  components: {
    // HelloWorld
    elmNav
  },
   data:function(){
    return {
        dataA:[]
    }
  
  },
  created() {
  this.getRestaurants()
},
  props:['msg'],
  methods: {
    getRestaurants(){
      var that =this
      let url ='http://localhost:8080/restapi/shopping/v3/restaurants?latitude=22.626049&longitude=113.837908&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5'

      axios({
        url:url,
        method:'GEt'
      }).then(res =>{
        console.log("列表",res.data.items);
        that.dataA = res.data.items;

      })

    }
  },
}

</script>

<style>
 a { text-decoration:none ;color: rgb(119, 92, 92);
    font-size: .83333rem;
 }
.boos-box{
    width: 100%;
    height: 100%;
    display: flex;

}
.head {
  width: 100%;
  height: 6.666667rem;
  background: #3f8ff7;
  display: flex;
  flex-direction: column;
}
.head .map-top {
  width: 100%;
  font-size: 1.23rem;
  color: aliceblue;
  font-weight: bold;
  height: 3.233333rem;
  line-height: 3.233333rem;
}
.head .map-top .top-p {
  margin-left: 0.933333rem;
}
.inp {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
input {
  width: 90%;
  height: 2.5rem;
  border: none;
  border-radius: 0.16667rem;
  align-self: center;
}

section {
    display: flex;
    flex-direction: column;
    height: 100%
}


main {
    flex: 1;
    overflow: auto;

}
figure{
    height: 11.833333rem;
    background: rgb(255, 255, 255);

}

.nav-box{
    width: 100%;
    /* background: rgb(132, 177, 96); */
    height: 50%;
    display: flex;


}
figure a{
    width: 20%;
    height: 100%;
    display: flex;

     justify-content: center;
     flex-direction: column;


}
.img-box{
    height: 65%;
    display: flex;
   justify-content: center;


    }
.img-box img{
    height: 100%;

}
.img-box span{
    width: 20%;
    text-align: center;
    color: darkslategrey
}
article{
    width:100%;
    height: 8.266667rem;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
}
.art-box{
    width: 95%;
    height:85%;
    background: rgb(255, 255, 255);
    display: flex;


}
 .art-box1{
     width: 50%;
     height: 100%;
     background:#f8f8f8;

 }
  .art-box1 img{
      height:100%;
      margin-left: .966667rem;
  }
  .text-nav{
      width: 100%;
      height:2.266667rem;
      text-align: center;
      color: rgb(53, 52, 52);
      font-size: 1.13333rem;
      line-height: 2.266667rem;
      
        }
        .nav-nav{
            width: 100%;
            height: 3.166667rem;
            background: rgb(255, 255, 255);
            display: flex;
            font-size: 1rem;
            color: rgb(73, 72, 71);
          

        }
        .nav-a{
            width: 25%;
            height: 100%;
        text-align: center;
        line-height: 3.166667rem;
        }






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
    