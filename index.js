module.exports = function(sails) {

	const install = require('./lib/install.js')
	const uninstall = require('./lib/uninstall.js')
	const command = require('./lib/alsamixer.command.js')
	const exec = require('./lib/exec.js')
	const init = require('./lib/init.js')

	gladys.on('ready', function(){
        init();
    });

	return {
		install,
		uninstall,
		command,
		exec,
	};
};
