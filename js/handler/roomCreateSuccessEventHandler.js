;(function(window, Utils, Handler, ClientEventCodes, ServerEventCodes) {
    'use strict';

    function RoomCreateSuccessEventHandler() {
        this.code = ClientEventCodes.CODE_ROOM_CREATE_SUCCESS;
    }

    Utils.extend(RoomCreateSuccessEventHandler, Handler);

    RoomCreateSuccessEventHandler.prototype.handle = function(client, panel, clientTransferData) {
        panel.append("You have created a room with id " + JSON.parse(clientTransferData.data).id);
        panel.append("Please wait for other players to join !");
    };

    if (!window._handlers_) {
        window._handlers_ = [];
    }
    window._handlers_.push(new RoomCreateSuccessEventHandler());
} (this, this.Utils, this.Handler, this.ClientEventCodes, this.ServerEventCodes));