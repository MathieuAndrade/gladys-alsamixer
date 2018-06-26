var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');
var command = require('./lib/alsamixer.command.js');
var exec = require('./lib/exec.js');

module.exports = function(sails) {

	return {
		install,
		uninstall,
		command,
		exec,
	};
};
