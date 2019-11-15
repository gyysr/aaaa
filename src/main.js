import Vue from 'vue';
import MintUI from 'mint-ui';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(MintUI);

Vue.directive('tap', (el, binding) => {
    el.addEventListener('touchstart', () => {
        router.push({
            name: binding.value
        });
    }, false);
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
