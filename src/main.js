import Vue from 'vue'
import App from './App.vue'
import {Container, Aside, Header, Main, Footer, Link, Row, Col, Input, Avatar, Icon, Menu, MenuItem} from 'element-ui';

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






new Vue({
  render: h => h(App),
}).$mount('#app')
