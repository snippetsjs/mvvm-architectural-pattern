import store from '../store';

export default {
  template: `
  <div>
    <b>Componente para editar...</b>
  </div>
  `,
  computed:{
    contato(){
      return store.state.contatos;
    }
  }
}
