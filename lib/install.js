const Promise = require('bluebird');
const sentences = require('./sentences.js');

module.exports = function install(){

	return gladys.utils.sql('select language from user where role=\'admin\' order by id')
		.then(function(language){
			insertSentences(language[0].language)
		})
		.then(() => {
			insertDevice()
		})
		.then(() => {
			sails.log.info('Alsamixer: Module installed with success !')
			return Promise.resolve()
		})

};

function insertSentences(language){

	if(language == 'fr-FR'){
		return gladys.sentence.insertBatch(sentences.fr)
			.then(() => {
				gladys.brain.trainNew()
				sails.log.info('Alsamixer: Sentence added !')
				return Promise.resolve()
			})
			.catch((err) => {
				sails.log.error(`Alsamixer: Error when inserting sentences : ${err}`)
				return Promise.reject()
			})
	}else{
		return gladys.sentence.insertBatch(sentences.en)
			.then(() => {
				gladys.brain.trainNew()
				sails.log.info('Alsamixer: Sentence added !')
				return Promise.resolve()
			})
			.catch((err) => {
				sails.log.error(`Alsamixer: Error when inserting sentences : ${err}`)
				return Promise.reject()
			})
	}
}

function insertDevice(){
	var device = {
		device: {
			name: 'Alsamixer',
			identifier: 'alsamixer',
			protocol: 'alsamixer',
			service: 'alsamixer'
		},
		types: [
			{
				name: "Speaker",
				identifier: "alsaSpeaker",
				type: 'multilevel',
				min: 0,
				max: 100,
				sensor: false
			},
			{
				name: "Mic",
				identifier: "alsaMic",
				type: 'multilevel',
				min: 0,
				max: 100,
				sensor: false
			},
			{
				name: "Mute",
				identifier: "alsaMute",
				type: 'binary',
				min: 0,
				max: 1,
				sensor: false
			}
		]   
	};

	gladys.device.create(device)
		.then(function(device){
			sails.log.info('Alsamixer: Device created !')
			return Promise.resolve()
		})
		.catch(function(err){
			sails.log.info(`Alsamixer: Error when creating device : ${err}`)
			return Promise.reject()
		});
}
