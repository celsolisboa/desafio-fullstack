export class SalasService {

  listaSalas = [{"nome":"102","id":"5c03dd809bbf58b6e07ed6ee"},{"nome":"103","id":"5c03dd849bbf58b6e07ed6ef"},{"nome":"201","id":"5c03dd889bbf58b6e07ed6f0"},{"nome":"202","id":"5c03dd8c9bbf58b6e07ed6f1"},{"nome":"203","id":"5c03dd909bbf58b6e07ed6f2"}];

  get() {
    return this.listaSalas;
  }

}
