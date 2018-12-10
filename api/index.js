var mysql = require('../config/db_config.js');
var bodyParser = require('../config/app_config.js');
var app = require('../config/app_config.js');
var connection = require('../config/db_config.js');
var validator  = require('validator');

//list all
app.get('/api/listaCurso', function (req, res) {
   connection.query('select cps.cd_curso_professor_sala,p.nm_professor,c.nm_curso,s.nm_sala ,cps.hr_inicio , cps.hr_fim from curso_professor_sala cps,curso c, sala s, professor p where c.cd_curso = cps.cd_curso and cps.cd_sala = s.cd_sala and cps.cd_professor = p.cd_professor ', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});
//list
app.get('/api/listaCurso/:id', function (req, res) {
	var id = validator.trim(validator.escape(req.params.id));
   connection.query('select cps.cd_curso_professor_sala,p.nm_professor,c.nm_curso,s.nm_sala ,cps.hr_inicio , cps.hr_fim from curso_professor_sala cps,curso c, sala s, professor p where c.cd_curso = cps.cd_curso and cps.cd_sala = s.cd_sala and cps.cd_professor = p.cd_professor and p.cd_professor=?', [id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//Create
app.post('/api/adicionarProfessorCursoSala', function (req, res) {
   var params  = req.body;
   console.log(params);
   connection.query('INSERT INTO curso_professor_sala SET ?', params, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//Update
app.put('/api/editarProfessorCursoSala', function (req, res) {
	var cd_curso     = validator.trim(validator.escape(req.body.cd_curso));
	var cd_professor = validator.trim(validator.escape(req.body.cd_professor));
	var cd_sala      = validator.trim(validator.escape(req.body.cd_sala));
	var hr_inicio    = validator.trim(validator.escape(req.body.hr_inicio));
	var hr_fim       = validator.trim(validator.escape(req.body.hr_fim));
	var cd_curso_professor_sala = validator.trim(validator.escape(req.body.cd_curso_professor_sala));

   connection.query('UPDATE `curso_professor_sala` SET `cd_curso`=?,`cd_professor`=?,`cd_sala`=?,`hr_inicio`=?,`hr_fim`=? where `cd_curso_professor_sala` =? ', [cd_curso,cd_professor,cd_sala,hr_inicio,hr_fim,cd_curso_professor_sala], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//Delete
app.delete('/api/deletarProfessorCursoSala', function (req, res) {
	var cd_curso_professor_sala = req.body.cd_curso_professor_sala;
   console.log(req.body);
   connection.query('DELETE FROM `curso_professor_sala` WHERE `cd_curso_professor_sala`=?', [cd_curso_professor_sala], function (error, results, fields) {
	  if (error) throw error;
	  res.end('Record has been deleted!');
	});
});