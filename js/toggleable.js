;(function(window) {
    'use strict';

    function Toggleable(el) {
        this.targetEl = el;
        this.visible = true;
    };

    Toggleable.prototype.triggerBy = function (eventType, predicate) {
        try {
            this.targetEl.addEventListener(eventType, (e) => {
                e.preventDefault();

                if (predicate.call(null, e, "hide") && this.visible) {
                    this.hide();
                    this.visible = !this.visible;
                }

                return false;
            }, false);

            document.addEventListener(eventType, (e) => {
                e.preventDefault();

                if (predicate.call(null, e, "show") && !this.visible) {
                    this.show();
                    this.visible = !this.visible;
                }

                return false;
            })
        } catch(e) {
            console.error(e);
            throw new Error("Unknown event type");
        }
    };

    Toggleable.prototype.hide = function() {
        this.targetEl.style.visibility = "hidden";
    };

    Toggleable.prototype.show = function() {
        this.targetEl.style.visibility = "visible";
        this.targetEl.querySelector("input").focus();
    };

    window.Toggleable = Toggleable;
} (this));