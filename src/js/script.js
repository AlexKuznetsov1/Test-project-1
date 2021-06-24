import {
    addRemoveTransitionBodyResize,
    addActiveElemDataAtt,
    removeActiveElemDataAtt,
    media,
    bodyScroll,
} from './function';


//------------------------------------------------------ SCRIPTS -----------------------------------------------------//
$(document).ready(function() {
    // //при нажатии на бургер  -------------------------------------------------------------------------------------------
    // $('.js_hamburger').on('click', function() {
    //     activeAddRemove($(this));
    //
    //     if (!$(this).hasClass('active')) {
    //         bodyScroll('.js_scroll');
    //         addActiveElemDataAtt('.js_modal', $(this));
    //     } else {
    //         bodyScroll();
    //         removeActiveElemDataAtt('.js_modal', $(this));
    //     }
    // });
    // //конец скрипта-----------------------------------------------------------------------------------------------------
    //
    // $(document).on("click", (function(e) {
    //     if ($('.js_popup.active').length) {
    //         $(e.target).closest(".js_popup, .js_hamburger").length || $(".js_hamburger, .js_popup").removeClass("active") && bodyScroll();
    //     }
    // }));
    //
    // //----------------------------------------------------------------------------------------------------------------//
    // //---------------------------------------------------- Resize ----------------------------------------------------//

    $(window).on('resize', function() {
        // отключаем  transition при resize и возврращаем через 700мс после resize -------------------------------------
        addRemoveTransitionBodyResize();
    });
});

//----------------------------------------------------- FUNCTION -----------------------------------------------------//
