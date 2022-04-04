// ==UserScript==
// @name         Spain r/place
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Por España.
// @author       vigarax
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://cdn-icons-png.flaticon.com/512/323/323365.png
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/vigarax/spainplace/raw/main/canvas.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
