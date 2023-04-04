import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import {
  Container,
  Aside,
  Header,
  Main,
  Footer,
  Link,
  Row,
  Col,
  Input,
  Avatar,
  Icon,
  Menu,
  MenuItem,
  Button,
  MessageBox, Dialog, Image, DropdownMenu, DropdownItem, Dropdown, Tabs, TabPane, Carousel, CarouselItem,
} from 'element-ui';

import store from './store';
import './utils/dialog'
import router from "@/router";
import VueRouter from "vue-router";
Vue.config.productionTip = false


Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Link)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Avatar)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Image)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Dropdown)
Vue.use(VueRouter)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Carousel)
Vue.use(CarouselItem)




Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
  store,
  router:router,
  beforeCreate() {
    Vue.prototype.$bus=this
    Vue.prototype.$alert = MessageBox.alert
  }

}).$mount('#app')
