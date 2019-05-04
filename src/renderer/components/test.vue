<template>
    <div>
      test
      <button @click="homeHref">转向home</button>
    </div>
</template>

<script>
    export default {
        name: "test",
        methods:{
          homeHref(){
            this.$router.push({path:'/'})
          }
        }
    }
</script>

<style scoped>

</style>
