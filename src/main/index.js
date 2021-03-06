import { app, BrowserWindow,Menu } from 'electron'
const electron = require('electron')
const ipc = electron.ipcMain

//设置菜单
let dockMenu = Menu.buildFromTemplate([
  {
    label: '文件', click: function () {
      console.log('点击事件');
    }
  },
  {
    label: '编辑', submenu: [
      {label: '保存'},
      {label: '另存'}
    ]
  },
  {label: '帮助'}
]);
Menu.setApplicationMenu(dockMenu);

//登录窗口最小化
ipc.on('window-min',function(){
  mainWindow.minimize();
})
//登录窗口最大化
ipc.on('window-max',function(){
  if(mainWindow.isMaximized()){
    mainWindow.restore();
  }else{
    mainWindow.maximize();
  }
})
ipc.on('window-close',function(){
  mainWindow.close();
})



/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    frame: false,
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
