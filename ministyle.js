class Accordion {
    constructor(element) {
        this.target = element;
        element.querySelectorAll(".header").forEach((e, index) => {
            e.addEventListener("click", (evt) => {
                this.toggle(e.getAttribute('data-target'));
            });
        });
    }
    toggle(targetID) {
        this.target.querySelector(`#${targetID}`).classList.toggle("active");
    }
    show(targetID) {
        this.target.querySelector(`#${targetID}`).classList.add("active");
    }
    hide(targetID) {
        this.target.querySelector(`#${targetID}`).classList.remove("active");
    }
    destroy() {
        this.target.remove();
    }
}
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
window["getAsyncRequests"] = () => {
    return XMLHttpRequest.prototype["requests"];
};
class Carousel {
    constructor(element) {
        this.items = new Array();
        this.target = element;
        let e;
        element.querySelectorAll(".content > *").forEach((e) => {
            this.items.push(e);
        });
        this.index = 0;
        this.timeout = 5;
        this.changeIn = 5;
        this.intervalRef = setInterval(() => {
            if (this.changeIn <= 0) {
                this.changeIn = this.timeout;
                this.next();
            }
            else
                this.changeIn -= 1;
            console.log(this.changeIn);
        }, 1000);
    }
    setInterval(interval) {
        this.timeout = interval;
        this.changeIn = interval;
    }
    next() {
        this.items[this.index].classList.remove('active');
        this.items[this.index].classList.add('hide');
        this.index = (this.index + 1) % this.items.length;
        this.items[this.index].classList.remove('hide');
        this.items[this.index].classList.add('active');
        this.changeIn = this.timeout;
    }
    prev() {
        this.items[this.items.length - (this.index + 1)].classList.remove('active');
        this.items[this.index].classList.add('hide');
        this.index = (this.index + 1) % this.items.length;
        this.items[this.index].classList.remove('hide');
        this.items[this.items.length - (this.index + 1)].classList.add('active');
        this.changeIn = this.timeout;
    }
}
window.addEventListener("load", () => {
    invalidBlankAnchor();
});
// disable anchor without reference
function invalidBlankAnchor() {
    let anchors = document.querySelectorAll("a[href=''], a[href='#']");
    let i = 0;
    for (i = 0; i < anchors.length; i += 1) {
        anchors[i].addEventListener("click", (e) => { e.preventDefault(); });
    }
}
// Modal Object
class Modal {
    constructor(element) {
        this.target = element;
        element.addEventListener("click", (e) => {
            if (e.target.className.split(' ').includes("modal")) {
                e.target.classList.remove("active");
            }
        });
    }
    show() {
        this.target.classList.add("active");
    }
    hide() {
        this.target.classList.remove("active");
    }
    destroy() {
        this.target.remove();
    }
}
// Modal Object
class Navbar {
    constructor(element) {
        this.target = element;
    }
    toggle() {
        this.target.classList.toggle("active");
    }
    show() {
        this.target.classList.add("active");
    }
    hide() {
        this.target.classList.remove("active");
    }
    destroy() {
        this.target.remove();
    }
}
