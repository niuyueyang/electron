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
  import {shell,remote} from 'electron';
    export default {
        name: "home",
      mounted(){
        const {Menu, MenuItem} = remote;
        //右键餐单
        const menu = new Menu();
        menu.append(new MenuItem({
          label: '放大',
          click:function ()  {
            console.log('item 1 clicked')
          }
        }));
        menu.append(new MenuItem({type: 'separator'}));//分割线
        menu.append(new MenuItem({label: '缩小', type: 'checkbox', checked: true}));//选中

        window.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          menu.popup({window: remote.getCurrentWindow()})
        }, false)
      },
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
