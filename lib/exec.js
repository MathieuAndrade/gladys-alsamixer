const speaker = require('./speaker.js')
const mic = require('./mic.js')

module.exports = function exec(params){

    switch(params.deviceType.identifier){
        case 'alsaSpeaker':
            speaker(params.state.value)
            break;
        case 'alsaMic':
            mic(params.state.value)
            break;
        case 'alsaMute':
            if(params.state.value == 1) params.state.value = 50
            mic(params.state.value)
            break;
    };
	
};