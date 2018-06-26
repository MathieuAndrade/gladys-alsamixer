const Promise = require('bluebird')
const exec = require('child_process').exec
const shared = require('./shared.js')

module.exports = function speakerDown(value){
    return exec(`amixer set ${shared.alsaMicValueParam} ${value}%`, function(error, stdout, stderr) {
        console.log(stdout)
        console.log(stderr)
        if (error !== null) {
           return Promise.reject(error)
        }
        return Promise.resolve()
    });
}