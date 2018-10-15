;(function() {

    // strict mode
    "use strict";

    // create element and attach it
    var el = document.createElement("div");
    el.style.position = "absolute";
    el.style.display = "block";
    el.style.visibility = "hidden";
    el.style.overflow = "scroll";
    document.body.appendChild(el);

    // get size and detach  element
    var size = el.offsetWidth;
    document.body.removeChild(el);

    // define readonly property
    Object.defineProperty(window, "scrollbarSize", {
        value: size,
        writable: false,
        configurable: false
    });

})(window, document);
