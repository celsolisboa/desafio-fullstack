 SELECT cursos.id,
    cursos.nome_curso,
    cursos.inicio,
    cursos.fim,
    cursos.sala_id,
    cursos.professor_id,
    salas.numero_sala,
    professores.nome_professor
   FROM cursos
     JOIN salas ON cursos.sala_id = salas.id
     JOIN professores ON cursos.professor_id = professores.id;