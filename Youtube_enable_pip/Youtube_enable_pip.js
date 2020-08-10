// ==UserScript==
// @name         Youtube pip btn on
// @namespace    https://www.youtube.com/watch*
// @version      0.1
// @description  try to take over the world!
// @author       eureakqq
// @match        https://www.youtube.com/watch*
// @grant        none
// @require http://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==

function enable_pip() {
    var id = setInterval(function () {
        var pip_btn = document.getElementsByClassName("ytp-pip-button ytp-button")[0];
        pip_btn.style.display = "";
        if (pip_btn.style.display === "") {
            clearInterval(id)
        }
    }, 250);
}

function disable_miniplayer() {
    var id = setInterval(function () {
        var mini_player_btn = document.getElementsByClassName("ytp-miniplayer-button ytp-button")[0];
        mini_player_btn.style.display = "none";
        if (mini_player_btn.style.display === "none") {
            clearInterval(id)
        }
    }, 250);
}

(function () {
    enable_pip();
    disable_miniplayer();

    $(window).bind('beforeunload', function () {
        console.log('asd')
        var video = document.getElementsByClassName("video-stream html5-main-video")[0];
        if (video === document.pictureInPictureElement) {
            document.exitPictureInPicture();
        }
    });
})();
