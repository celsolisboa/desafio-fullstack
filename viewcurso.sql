 SELECT cursos.id,
    cursos.nome_curso,
    cursos.inicio,
    cursos.fim,
    salas.numero_sala,
    professores.nome_professor
   FROM cursos
     JOIN salas ON cursos.sala_id = salas.id
     JOIN professores ON cursos.professor_id = professores.id;