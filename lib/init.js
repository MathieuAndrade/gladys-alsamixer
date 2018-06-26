const Promise = require('bluebird')
const shared = require('./shared.js')

module.exports = function init(){

    return getParam(shared.alalsaSpeakerNameParam)
        .then((value) => {
            shared.alalsaSpeakerNameParam = value
            return getParam(shared.alsaMicNameParam)
        })
        .then((value) => {
            shared.alsaMicValueParam = value
            return Promise.resolve()
        })

}

function getParam(name){
    return gladys.param.getValue(name)
        .then((value) => {
            return Promise.resolve(value)
        })
        .catch((err) => {
            sails.log.error(`Alsamixer: Error when getting the param : ${err}`)
            return Promise.reject()
        })
}