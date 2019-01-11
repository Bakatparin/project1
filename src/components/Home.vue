<template>
    <div>
        <h1>主页</h1>
        <button @click="goto" class="btn btn-success">goto</button>
    </div>
    
</template>

<script>
export default {
    methods:{
        goto(){
            //跳转到上一个页面
            // this.$router.go(-1)

            //指定跳转
            // this.$router.replace('/menu')
            // this.$router.replace({name:'aboutLink'})

            //
            // this.$router.push('/login')
            this.$router.push({name:'registerLink'})
        }
    }
}
</script>