'use strict';

module.exports = function(Sala) {
  Sala.validatesUniquenessOf('nome', {message: 'Sala já cadastrada'});
};
