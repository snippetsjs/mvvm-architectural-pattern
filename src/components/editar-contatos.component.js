import store from '../store';

export default {
  template: `
  <div>
    <b>Teste</b>
  </div>
  `,
  computed:{
    contato(){
      return store.state.contatos;
    }
  }
}
