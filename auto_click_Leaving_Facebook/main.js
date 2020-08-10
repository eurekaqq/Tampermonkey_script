// ==UserScript==
// @name         auto click Leaving Facebook
// @namespace    https://github.com/eurekaqq/auto_click_Leaving_Facebook
// @version      0.1
// @description  自動點擊即將離開煩人的facebook
// @author       eurekaqq
// @match        https://www.facebook.com/flx/warn/*
// ==/UserScript==

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

(function () {
    var btn = getElementByXpath('//*[@id="u_0_v"]');

    if (btn != null) {
        setTimeout(function () { btn.click(); }, 150);
    };
})();
