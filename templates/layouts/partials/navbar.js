Template.admin_navbar.hooks({
    rendered: function(){
        if($('.page-title').length > 0) {
            $('.page-title-mobile').html($('.page-title').html());
            $('.page-title-mobile').find('.breadcrumb').remove();
        }
    }
});

Template.admin_navbar.helpers({
    title: function(){
        return ElaoAdmin.config.layout.title;
    }
});
