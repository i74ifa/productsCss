$.each($('[short-val]'), function (key, value) {
    jQuery(document).bind(`keydown.${$(value).attr('short-val')}`, function (evt) {
        $(value).click();
        //prevent default key 
        // return false;
    })
})