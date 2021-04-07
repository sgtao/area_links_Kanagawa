'use strict';

// initialize
function init() {
        // const govs_top  = document.querySelector('#govs-top');
        const govs_news = document.querySelector('#govs-news');
        const govs_paper = document.querySelector('#govs-paper');
        const town_news = document.querySelector('#town-news');

        showLinks("assets/kanagawa_govs_news.csv");

        govs_news.addEventListener('click', (e) => {
                showLinks("assets/kanagawa_govs_news.csv");
        });
        govs_paper.addEventListener('click', (e) => {
                showLinks("assets/kanagawa_govs_paper.csv");
        });
        town_news.addEventListener('click', (e) => {
                showLinks("assets/kanagawa_town_news.csv");
        });
}

document.addEventListener('DOMContentLoaded', function () {
        init();
});
