import _ from 'lodash';
import store from '../store';

export default {
    template: `
        <div>
            <input type="text" class="form-control" v-model="filter">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th v-for="coluna in colunas">
                        <a href="#" @click.prevent="sortBy(coluna)">{{coluna}}</a>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(contato,index) in contatosFiltrado" :class="{'success': index < 3, 'warning': index > 2 && index <6, 'danger': index > 15}">
                    <td>
                      <img :src="contato.foto" style="height: 30px; width: 30px;">
                      <strong>{{contato.nome}}</strong>
                    </td>
                    <td>{{contato.email}}</td>
                    <td>{{contato.telefone}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    `,
    created(){
      store.dispatch('carregar-estado-contatos');
    },
    data(){
      return {
        order: {
          keys: ['telefone'],
          sort: ['desc', 'desc', 'asc']
        },
        filter: '',
        colunas: ['nome', 'email', 'telefone'],
      };
    },
    methods: {
      sortBy(coluna){
        this.order.keys = coluna;
        this.order.sort = this.order.sort == 'desc' ? 'asc' : 'desc';
      }
    },
    computed: {
      contatos(){
        return store.state.contatos;
        //return this.$store.state.times;
      },
      contatosFiltrado(){
        let colecao = _.orderBy(this.contatos, this.order.keys, this.order.sort);

        return _.filter(colecao, item => {
          return item.nome.indexOf(this.filter) >= 0;
        });
      }
    }
  };
