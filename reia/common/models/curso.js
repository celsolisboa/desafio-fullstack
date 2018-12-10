'use strict';

module.exports = function(Curso) {
  Curso.validatesPresenceOf('professorId');
  Curso.validatesPresenceOf('salaId');
};
