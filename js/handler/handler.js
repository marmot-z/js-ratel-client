;(function(window, Utils) {
	'use strict';

	function Handler() {
		this.code = null;
		this.log = new Utils.Logger();
	}

	Handler.prototype.getCode = function() {
		return this.code;
	};

	Handler.prototype.handle = function(terminate, clientTransferData) {};

	window.Handler = Handler;
} (this, this.Utils));