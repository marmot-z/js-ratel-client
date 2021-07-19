;(function(window, Panel, Utils) {
	'use strict';

	var HandlerLoader = Utils.HandlerLoader;
	var log = new Utils.Logger();

	function ImClient(url) {
		this.url = url;
		this.panel = new Panel();
	}

	ImClient.version = "1.0.0";
	ImClient.prototype.Connect = function(resolve, reject) {
		if (window.WebSocket) {
			this.socket = new WebSocket(this.url);

			this.socket.onmessage = (event) => {
				this.protocol.decode(event.data).then(v => this.dispatch(v));
			};
			this.socket.onopen = (event) => {
				log.info("websocket ({}) open", this.url);
				resolve();
			};
			this.socket.onclose = (e) => {
				log.info("websocket ({}) close", this.url);
				reject(e);
			};
			this.socket.onerror = (e) => {
				log.error("Occur a error {}", e);
				reject(e);
			};
		} else {
			log.error("current browser not support websocket");
		}
	};

	ImClient.prototype.send = function(data) {
		this.socket.send( {
			id: 0,
			data: data
		})
	};

	ImClient.prototype.close = function() {
		this.socket.close();
	};

	window.ImClient = ImClient;
} (this, this.Panel, this.Utils));
