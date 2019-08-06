import Vue from 'vue';
import Vuex from 'vuex';
import MainComponent from './main.component.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {

    }
})

const app = new Vue({
    el: '#app',
    store,
    render: render => render(MainComponent),
})
