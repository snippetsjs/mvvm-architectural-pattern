import store from '../store';
import ListarContatos from './listar-contatos.component'

export default {
  components: {
    'listar-contatos': ListarContatos
  },
  template: `
    <div class="container">
      <div class="row">
        <h3> ... </h3>
          <a class="btn btn-success" @click="listarContatos">Listar Contatos</a>
          <a class="btn btn-primary" @click="editarContato">Editar Contatos</a>
        <br/><br/>
        <div v-show="screem == 'listar'">
          <listar-contatos></listar-contatos>
        </div>
        <div v-if="screem == 'editar'">
          edit contacts
        </div>
      </div>
    </div>
    `,
  computed:{
    screem(){
      return store.state.screem;
      //return this.$store.state.screem;
    }
  },
  methods: {
    listarContatos() {
      store.commit('exibir-listar-contatos');
    },
    editarContato() {
      store.commit('exibir-editar-contatos');
    }
  }
};
