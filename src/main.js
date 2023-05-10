import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueCookies from 'vue-cookies'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/base.scss'
import '@/assets/icon/iconfont.css'

//global methods
import Verify from '@/utils/Verify'
import Message from '@/utils/Message'
// global components
import Dialog from "@/components/Dialog.vue"

const app = createApp(App)

app.use(router)
app.use(ElementPlus);
app.config.globalProperties.VueCookies = VueCookies;
app.config.globalProperties.globalInfo = {
    bodyWidth: 1300,
}
app.config.globalProperties.Verify = Verify;
app.config.globalProperties.Message = Message;
app.component("Dialog", Dialog);
app.mount('#app')
