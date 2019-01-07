// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 按需引入部分组件
import {Cell, Checklist, Toast, Button, TabContainer, TabContainerItem, Swipe, SwipeItem, Loadmore, Radio, Indicator, Spinner } from 'mint-ui';
Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
Vue.component(Toast);
Vue.component(Button.name, Button);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Radio.name, Radio);
Vue.component(Indicator);
Vue.component(Spinner.name, Spinner);

Vue.config.productionTip = false

 // 路由发生变化修改页面title
 router.beforeEach((to, from, next) => {

  if (to.meta.title) {
    document.title = to.meta.title;
      //如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
      /*if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            const hackIframe = document.createElement('iframe');
            hackIframe.style.display = 'none';
            hackIframe.src = '/static/html/fixIosTitle.html?r=' + Math.random();
            document.body.appendChild(hackIframe);
            setTimeout(_ => {
                document.body.removeChild(hackIframe)
            }, 300)
        }*/
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
