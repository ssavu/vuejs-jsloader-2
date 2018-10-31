import Vue from 'vue'
import AppComponent from '../AppComponent.vue'
// import {} from './AppComponent.js';

export default function() {
    new Vue({
        render: h => h(AppComponent)
    }).$mount('#app');
    // new Vue({
    //     el: "#app"
    // })
}