import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import {Time} from './time';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
    screem: 'listar',
    times: []
};

const mutations = {
    'set-times'(state, times){
        state.times = times;
    },
    update(state, time){
        let index = state.times.findIndex(element => time.id == element.id);
        if (index != -1) {
            state.times[index] = time;
        }
    },
    'exibir-listar-contatos'(state){
        state.screem = 'listar';
    },
    'exibir-editar-contatos'(state){
        state.screem = 'editar';
    }
};

const actions = {
    'load-times'(context){
        Vue.http.get('http://localhost:8080/dist/times.json').then(response => {
            let times = response.data.map(element => new Time(element.id, element.nome, element.escudo));
            console.log(times);
            context.commit('set-times', times);
        });
    }
};

export default new Vuex.Store({
    state,
    getters: {
        timesLibertadores: state => state.times.slice(0, 6),
        timesRebaixados: state => state.times.slice(16, 20),
    },
    mutations,
    actions
});
