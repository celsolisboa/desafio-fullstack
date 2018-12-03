export class ProfessoresService {

  listaProfessores = [{"nome":"Carlos Almeida","id":"5c03dd299bbf58b6e07ed6ea"},{"nome":"Maria Joaquina","id":"5c03dd3c9bbf58b6e07ed6eb"},{"nome":"Xavier","id":"5c03dd4e9bbf58b6e07ed6ec"},{"nome":"Chico","id":"5c0461d8143c48ce2d749749"}];

  get() {
    return this.listaProfessores;
  }
}
