import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import { Contato } from './Contato';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
    screem: 'listar',
    contatos: []
};

const mutations = {
    'setar-estado-contatos'(state, contatos){
        state.contatos = contatos;
    },
    update(state, time){
        let index = state.contatos.findIndex(element => time.id == element.id);
        if (index != -1) {
            state.contatos[index] = time;
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
    'carregar-estado-contatos'(context){
        Vue.http.get('http://localhost:8080/dist/contacts.json').then(response => {
            let contatos = response.data.map(obj => new Contato(obj.id, obj.nome, obj.email, obj.telefone, obj.foto));
            context.commit('setar-estado-contatos', contatos);
        });
    }
};

export default new Vuex.Store({
    state,
    getters: {
        // return 6 primeiros
        primeirosContatos: state => state.contatos.slice(0, 6),
    },
    mutations,
    actions
});
