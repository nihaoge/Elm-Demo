<template>
<h1>剩余余额</h1>
    


</template>

<script>
export default {
    //局部路由守卫
    beforeRouteEnter (to, from, next) {
        let islog = false
        if(!islog){
            next('/login')
        }else{
            next()
        }
    }
    
        }
</script>

<style lang="css">
h2{
    text-align: center;
    border: solid 2px #456789
}
    
</style>