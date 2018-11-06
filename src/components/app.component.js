import store from '../store';
import ListarContatos from './listar-contatos.component';
import EditarContatos from './editar-contatos.component';

export default {
  components: {
    'listar-contatos': ListarContatos,
    'editar-contatos': EditarContatos
  },
  template: `
    <div class="container">
      <div class="row">
        <h3> ... </h3>
          <a class="btn btn-success" @click="listarContatos">Listar Contatos</a>
          <a class="btn btn-primary" @click="editarContatos">Editar Contatos</a>
        <br/><br/>
        <div v-show="screem == 'listar'">
          <listar-contatos></listar-contatos>
        </div>
        <div v-if="screem == 'editar'">
          <editar-contatos></editar-contatos>
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
    editarContatos() {
      store.commit('exibir-editar-contatos');
    }
  }
};
