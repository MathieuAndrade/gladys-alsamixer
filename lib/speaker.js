const Promise = require('bluebird');
const exec = require('child_process').exec;

module.exports = function speakerDown(value){
    return exec(`amixer set PCM ${value}%`, function(error, stdout, stderr) {
        if (error !== null) {
           return Promise.reject(error)
        }
        return Promise.resolve()
    });
}