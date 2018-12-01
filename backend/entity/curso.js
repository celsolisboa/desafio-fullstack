class Curso {
    constructor() {
        this.id = 0;
        this.nome = "";
        this.hr_inicio = "00:00:00";
        this.hr_fim = "00:00:00";
        this.professores = [];
        this.salas = [];
    }
}

module.exports = Curso;