import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//引入vuex
Vue.use(Vuex)
//解决跨页面数据共享

const store = new Vuex.Store({
    //创建全局共享数据
    state:{
        count:0,
        userinfo:{
            name:'杨村村长',
            age:'20'
        },
         musicList:[]
         
    },
    //改变state的同步方法
    mutations:{
        //同步修改count里面的值
        add(state,payload){
            state.count += payload
            //也可手动添加,不推荐 this.$store.state.count++
        },
        //自定义方法更新数据
        updateMusicList(state,payload){
            let list = state.musicList
            // 合并数组
            list=[...list,...payload]
           state.musicList = list

        },
        mMusic(state){
            state.musicList = []
        }
    },
    //异步方法,调接口,ajax等须使用
    actions:{
        fatchMusics(store) {
            let url = 'http://localhost:8080/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=56379327078885827&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
            axios({
              url: url,
              method: 'GET'
            }).then(res => {
              console.log('音乐列表', res.data.data.song.list)
              store.commit('updateMusicList',res.data.data.song.list)
           
              
            })
          },


     }
})

export default store