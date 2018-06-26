const speaker = require('./speaker.js');
const mic = require('./mic.js');

module.exports = function command(scope) {
    console.log(scope)

    switch(scope.label) {
        case 'speaker-up':
        break;
    
        case 'speaker-down':
        break;
    
        case 'mic-up':
        break;
            
        case 'mic-down':
        break;
    
        default:
            sails.log.error('Alsamixer: No command detected !')
            break;
    }
};