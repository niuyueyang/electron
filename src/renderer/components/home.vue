<template>
    <div>
      <Common></Common>
      home
      <router-link to="/test" tag="button">转向test</router-link>
      <button @click="tag">打开外部链接</button>
    </div>
</template>

<script>
  import Common from './common';
  import {shell} from 'electron';
    export default {
        name: "home",
      components: {Common},
      methods:{
            tag(){
              shell.openExternal('http://www.baidu.com')
            }
        }
    }
</script>

<style scoped>

</style>
