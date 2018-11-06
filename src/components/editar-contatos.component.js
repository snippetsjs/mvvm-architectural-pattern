import store from '../store';

const vm. () =>{
  template: `
  <div>
    <b>Componente para editar...</b>
  </div>
  `,
  mounted(){
    this.setarContato(store.state.contatos);
  },
  data(){
    return {
      mockContato: {

      }
    }
  },
  methods: {
    setarContato(){

    }
  }
}
