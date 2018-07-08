'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let tds = table.querySelectorAll('td');
    let trs = table.querySelectorAll('tr');

    [].forEach.call(tds, function(div) {
        // 1
        if(div.dataset.available === 'true') {
            div.parentNode.classList.add('available')
        } else if (div.dataset.available === 'false') {
            div.parentNode.classList.add('unavailable')
        }

        // 3
        if(div.innerText === 'm' ){
            div.parentNode.classList.add('male');
        }
        if(div.innerText === 'f'){
            div.parentNode.classList.add('female');
        }

        // 4
        if(parseInt(div.innerText) <=18 ){
            div.parentNode.style.textDecoration = 'line-through';
        }
    });

    [].forEach.call(trs, function(div) {
        div.setAttribute('hidden','');
    });
}