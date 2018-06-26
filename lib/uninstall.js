const Promise = require('bluebird');
const sentences = require('./sentences.js');

module.exports = function uninstall(){

	return deleteSentences()
		.then(() => {
			deleteDevice()
		})
		.then(() => {
			return Promise.resolve()
		})
	
	
};

function deleteSentences(){
	return gladys.utils.sql('delete from sentence where service ?', 'alsamixer')
		.then(() => {
			sails.log.info('Alsamixer: Sentence deleted !')
			return Promise.resolve()
		})
		.catch((err) => {
			sails.log.error(`Alsamixer: Erro when deleting sentence : ${err}`)
			return Promise.reject()
		})
}

function deleteDevice(){
	return gladys.utils.sql('delete from device where service ?', 'alsamixer')
		.then(() => {
			sails.log.info('Alsamixer: Device deleted !')
			return Promise.resolve()
		})
		.catch((err) => {
			sails.log.error(`Alsamixer: Erro when deleting device : ${err}`)
			return Promise.reject()
		})
		
}
