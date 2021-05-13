exports.up = function(db, callback) {
  db.runSql(`
    INSERT INTO courses (id, name, teachers, rooms, start_at, end_at, disabled)
                 VALUES ('510f6df2-0fb4-58a5-93eb-cb6fc18c9221', 'Biologia', 'Afonso,Leandro', 'B1,B2', '08:00', '10:00', false),
                        ('c26550e7-3629-5ba0-97a3-c96de4000227', 'Gestão', 'Maria,Gabriela', 'G1,G2', '08:00', '10:00', false),
                        ('f3bdf11a-436c-53c3-80af-24ba56048375', 'História', 'Gabriela,Leandro', 'H1,H2', '08:00', '10:00', true);
  `, callback)
}

exports.down = function(db, callback) {
  db.runSql(`
    DELETE FROM courses;
  `,callback)
}
