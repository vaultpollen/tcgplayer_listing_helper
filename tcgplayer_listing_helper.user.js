// ==UserScript==
// @name         TCGPlayer Listing Helper
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automate listing search and price setting on TCGPlayer
// @match        https://store.tcgplayer.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.altKey) {
            switch (event.key.toUpperCase()) {
                case 'A':
                    clearSearchField();
                    break;
                case 'B':
                    adjustPrice();
                    break;
                case 'C':
                    clickSaveButton();
                    break;
            }
        }
    });

    function clearSearchField() {
        let searchField = document.getElementById('SearchValue');
        if (searchField) {
            searchField.value = '';
            searchField.focus();
        }
    }

    function adjustPrice() {
        let priceElements = document.querySelectorAll('[data-bind="formatCurrency: marketPrice"]');
        for (let priceEl of priceElements) {
            let price = parseFloat(priceEl.textContent.replace(/[^0-9.]/g, ''));
            if (!isNaN(price)) {
                let newPrice = price > 0.10 ? (price - 0.01).toFixed(2) : '0.10';
                let textInput = priceEl.closest('tr').querySelector('input[type="text"]');
                if (textInput) {
                    textInput.value = newPrice;
                    textInput.dispatchEvent(new Event('input', { bubbles: true }));
                    textInput.dispatchEvent(new Event('change', { bubbles: true }));
                    let nextInput = textInput.closest('td').nextElementSibling?.querySelector('input[type="text"]');
                    if (nextInput) {
                        nextInput.focus();
                    }
                }
                break;
            }
        }
    }

    function clickSaveButton() {
        let saveButton = document.querySelector('input[type="button"][value="Save"]');
        if (saveButton) {
            saveButton.click();
        }
    }
})();
