// ==UserScript==
// @name         fit manga
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       eureakqq
// @match        https://m.manhuagui.com/comic/*
// @grant        none
// @require http://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

function resize() {
    var id = setInterval(function () {
        var img = document.querySelector("#manga img")
        var h = img.height
        img.style.height = window.innerHeight + 'px'
        img.style.width = (img.width * window.innerHeight / h) + 'px'
        img.scrollIntoView()
        if (img.height == h) {
            clearInterval(id)
        }
    }, 250)
}

(function () {
    Array.from(document.querySelectorAll("#prev, #next")).map(e => e.addEventListener('click', () => { resize() }))
    resize();
})();
