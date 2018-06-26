const Promise = require('bluebird')
const shared = require('./shared.js')

module.exports = function uninstall(){

	return deleteSentences()
		.then(() => {
			deleteDevice()
		})
		.then(() => {
			deleteParam(shared.alsaSpeakerNameParam)
		})
		.then(() => {
			deleteParam(shared.alsaMicNameParam)
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

function deleteParam(name){
	return gladys.param.delete(name)
		.then(() => {
			sails.log.info('Alsamixer: Param deleted !')
			return Promise.resolve()
		})
		.catch((err) => {
			sails.log.error(`Alsamixer: Error when deleting param : ${err}`)
			return Promise.reject()
		})
}
