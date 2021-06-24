import {disableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';

// показываем модальник ------------------------------------------------------------------------------------------------
export function addActiveElemDataAtt(addActiveElem, elemDataAtt) {
    $(`${addActiveElem}[data-menu='${elemDataAtt.data('menu')}']`).addClass('active');
}

// скрываем модальник --------------------------------------------------------------------------------------------------
export function removeActiveElemDataAtt(removeActiveElem, elemDataAtt) {
    $(`${removeActiveElem}[data-menu='${elemDataAtt.data('menu')}']`).removeClass('active');
}

// Отключаем  transition  ----------------------------------------------------------------------------------------------
export function addRemoveTransitionBodyResize() {
    $('html').addClass('transition');
    setTimeout(function() {
        $('html').removeClass('transition');
    }, 700);
}//конец скрипта--------------------------------------------------------------------------------------------------------

// отключаем или включаем скролл у body --------------------------------------------------------------------------------
export function bodyScroll(elem) {
    if(elem){
        disableBodyScroll(document.querySelector(elem));
    }else {
        clearAllBodyScrollLocks();
    }
}

// медиа запрос --------------------------------------------------------------------------------------------------------
export const media = (minMax, param) => {
    return window.matchMedia(`(${minMax}-width: ${param}px)`).matches;
};