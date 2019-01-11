<template>
    <h1>管理</h1>
</template>
<script>
export default {
    data(){
        return{
            name:'haha'
        }
    },

    // 组件内的守卫
    // beforeRouteEnter (to, from, next) {
    //     // ...
    //     // alert("beforeRouterEnter");
    //     // next(alert('beforeRouterEnter的回调函数'));
    //     alert('beforeRouterEnter');
        
    //     //这个写法是进入下一个钩子
    //     next(alert(1));

    //     // 下面这种写法是回调函数
    //     next(vm => {
    //         alert("beforeRouterEnter回调函数");//当前组件的实例
    //     });
        
    // },


}
</script>
