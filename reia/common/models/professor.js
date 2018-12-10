'use strict';

module.exports = function(Professor) {
  Professor.validatesUniquenessOf('nome', {message: 'Professor já cadastrado'});
};
