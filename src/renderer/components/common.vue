<template>
  <div>
    <section style="-webkit-app-region: no-drag">
      <button type="button" id="maxbt" @click="max">max</button>
      <button type="button" id="minbt" @click="min">min</button>
      <button type="button" id="closebt" @click="closes">close</button>
    </section>
  </div>
</template>

<script>
    var ipc = require('electron').ipcRenderer;
    export default {
        name: "common",
        methods:{
          max(){
            ipc.send('window-max');
          },
          min(){
            ipc.send('window-min');
          },
          closes(){
            ipc.send('window-close');
          }
        }
    }
</script>

<style scoped>

</style>
