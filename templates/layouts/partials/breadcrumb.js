Template.breadcrumb.hooks({
    rendered: function(){
        if($('.page-title').length > 0) {
            if ($('.page-title').find('.breadcrumb').length > 0) {
                $('.page-title').addClass('has-breadcrumb');
            }
            
            $('.page-title-mobile').find('.breadcrumb').remove();
        }
    }
})
