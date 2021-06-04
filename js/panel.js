;(function(window, EventWrapper, Toggleable, Utils, Poker) {
    'use strict';

    function Panel() {
        this.eventWrapper = new EventWrapper();
        this.terminalDiv = document.querySelector("#terminal");
        this.contentDiv = document.querySelector("#content");
        this.inputBox = document.querySelector("#input");

        Toggleable.call(this, document.querySelector("#console"));
        Toggleable.prototype.triggerBy.call(this, "keyup", togglePredicate);
    }

    Utils.extend(Panel, Toggleable);

    var prefix = '<div id="prefix" style="overflow:hidden;width:100%"><i class="fa fa-angle-right" aria-hidden="true" style="padding-right:5px;color:#2162ac"></i>';

    Panel.prototype.append = function(str) {
        var split = str.split("\n");
        var html = split.join("</br>") + "</br>";

        this.contentDiv.innerHTML += html;
        this.contentDiv.scrollTop = this.contentDiv.scrollHeight;
    };

    var enterCode = 13;

    Panel.prototype.waitInput = function() {
        return new Promise(resolve => {
            this.eventWrapper.addEventListener(this.inputBox, "keypress", (e) => {
                var val = this.inputBox.value.trim();

                if (e.keyCode == enterCode) {
                    if (Utils.isEmpty(val)) return;

                    resolve(val);
                    this.append(prefix + val + '</div>');
                    this.eventWrapper.removeEventListener(this.inputBox, "keypress");
                    this.inputBox.value = "";
                }
            }, false);
        });
    };

    var arrowUpCode = 38;
    var arrowDownCode = 40;

    function togglePredicate(e, type) {
        var keyCode = e.keyCode;
        var ctrlKey = e.ctrlKey;

        // ctrl + ↑/↓
        return ctrlKey && (type == "show" ? keyCode === arrowUpCode : keyCode === arrowDownCode);
    }

    window.Panel = Panel;
} (this, this.EventWrapper, this.Toggleable, this.Utils, this.Poker));