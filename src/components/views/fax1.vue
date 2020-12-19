<template>
<div>
    <div v-for="(item,idx) in list" :key='idx'>
        <h2 v-text="item.name" @touchstart="a(item)"></h2> 
        
    </div>
    
</div>

</template>

<script>
export default {
    data() {
        return {
            list:[
                {name:'四川水煮鱼',id:1},
                {name:'四川水煮鱼',id:2},
                {name:'四川水煮鱼',id:3},
                {name:'四川水煮鱼',id:4},
                {name:'四川水煮鱼',id:5},
                {name:'四川水煮鱼',id:6},
                {name:'四川水煮鱼',id:7},
                {name:'四川水煮鱼',id:8},
                {name:'四川水煮鱼',id:9},
                {name:'四川水煮鱼',id:10},
                {name:'四川水煮鱼',id:12},
                {name:'四川水煮鱼',id:11},


            ]
        }
    },
    //js路由跳转
    methods: {
        //a调用
        a(item){
            console.log(item)
            
            this.$router.push('/xq/'+item.id)//动态路由
            //可以传递多个参数,路由页面也需要同步添加
            // this.$router.push('/xq/'+item.id+'/'item.name')

        }
    },
    
}
</script>

<style lang="css">
h2{
    text-align: center;
    border: solid 2px #456789
}
    
</style>