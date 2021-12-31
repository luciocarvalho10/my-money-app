const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', {useMongoClient: true})

mongoose.Error.messages.general.required = "O atributo {PATH} é obrigatório!"
mongoose.Error.messages.Number.min = "O {VALUE} informado é menor que o pertminito - {MIN}!"
mongoose.Error.messages.Number.max = "O {VALUE} informado é maior que o pertminito - {MAX}!"
mongoose.Error.messages.String.enum = "O {VALUE} não e válido para o atributo {PATH}!"