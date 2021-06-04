;(function(window) {
    'use strict';

    function Site(siteInfo) {
        this.url = siteInfo.url;
        this.title = siteInfo.title;
        this.icon = siteInfo.icon;
    }

    var iconPrefix = "./favicons/";

    Site.prototype.render = function() {
        document.querySelector("#site").src = this.url;
        document.querySelector("#headTitle").innerHTML = this.title;
        document.querySelector("link[rel*='icon']").href = iconPrefix + this.icon;
    };

    var siteMap = {
        "baidu": {url: "https://baidu.com/", title: "百度一下，你就知道", icon: "favicon-baidu.ico"},
        "vue": {url: "https://vuejs.org/", title: "Vue.js", icon: "favicon-vue.png"},
        "bilibili": {url: "https://www.bilibili.com/", title: "哔哩哔哩 (゜-゜)つロ 干杯~-bilibili", icon: "favicon-bilibili.ico"}
    };

    var defaultSiteName = "baidu";

    window.defaultSite = new Site(siteMap[defaultSiteName]);
} (this));