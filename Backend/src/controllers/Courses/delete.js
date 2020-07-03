const Courses = require('../../models/Courses');

module.exports = {
     //Deletando usuários
     async delete(req, res) {
        const { id } = req.params;

        //consultando o curso
        const courses = await Courses.findByPk(id);

        //Checando se a curso existe antes de deletar
        if(!courses){
          return res.status(201).json("Curso não encontrado!")
          &&
          console.log("Curso não encontrado!")
        }
        
        //Excluindo todos os dados do curso
        await Courses.destroy({
          where: { id }
        });
    
        return res.json("Curso deletado com sucesso!")
        &&
        console.log("Curso deletado com sucesso!")
      }
}