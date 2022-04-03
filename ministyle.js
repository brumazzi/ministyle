var Accordion = /** @class */ (function () {
    function Accordion(element) {
        var _this = this;
        this.target = element;
        element.querySelectorAll(".header").forEach(function (e, index) {
            e.addEventListener("click", function (evt) {
                _this.toggle(e.getAttribute('data-target'));
            });
        });
    }
    Accordion.prototype.toggle = function (targetID) {
        this.target.querySelector("#".concat(targetID)).classList.toggle("active");
    };
    Accordion.prototype.show = function (targetID) {
        this.target.querySelector("#".concat(targetID)).classList.add("active");
    };
    Accordion.prototype.hide = function (targetID) {
        this.target.querySelector("#".concat(targetID)).classList.remove("active");
    };
    Accordion.prototype.destroy = function () {
        this.target.remove();
    };
    return Accordion;
}());
// register async requests
XMLHttpRequest.prototype["requests"] = 0;
XMLHttpRequest.prototype["nativeSend"] = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function (body) {
    this.onreadystatechange = function (e) {
        switch (this.readyStage) {
            case XMLHttpRequest.HEADERS_RECEIVED:
                XMLHttpRequest["requests"] += 1;
                break;
            case XMLHttpRequest.DONE:
                XMLHttpRequest["requests"] -= 1;
                break;
        }
    };
};
window["getAsyncRequests"] = function () {
    return XMLHttpRequest.prototype["requests"];
};
window.addEventListener("load", function () {
    invalidBlankAnchor();
});
// disable anchor without reference
function invalidBlankAnchor() {
    var anchors = document.querySelectorAll("a[href=''], a[href='#']");
    var i = 0;
    for (i = 0; i < anchors.length; i += 1) {
        anchors[i].addEventListener("click", function (e) { e.preventDefault(); });
    }
}
// Modal Object
var Modal = /** @class */ (function () {
    function Modal(element) {
        this.target = element;
        element.addEventListener("click", function (e) {
            if (e.target.className.split(' ').includes("modal")) {
                e.target.classList.remove("active");
            }
        });
    }
    Modal.prototype.show = function () {
        this.target.classList.add("active");
    };
    Modal.prototype.hide = function () {
        this.target.classList.remove("active");
    };
    Modal.prototype.destroy = function () {
        this.target.remove();
    };
    return Modal;
}());
// Modal Object
var Navbar = /** @class */ (function () {
    function Navbar(element) {
        this.target = element;
    }
    Navbar.prototype.toggle = function () {
        this.target.classList.toggle("active");
    };
    Navbar.prototype.show = function () {
        this.target.classList.add("active");
    };
    Navbar.prototype.hide = function () {
        this.target.classList.remove("active");
    };
    Navbar.prototype.destroy = function () {
        this.target.remove();
    };
    return Navbar;
}());
