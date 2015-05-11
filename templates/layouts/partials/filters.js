Template.filters.events({
    'submit form': function(e){
        e.preventDefault();
        Router.go(Router.current().location.get().pathname + '?' + $(e.target).serialize());
    },
    'click button[type="reset"]': function(e){
        Router.go(Router.current().location.get().pathname);
    }
});

Template.filters.hooks({
    rendered: function () {
        $("#filters_button").addClass('collapsed');
        $('#filters').removeClass(['collapsing', 'in']);
        $('#filters').addClass('collapse');
    }
});

Template.filters_button.hooks({
    rendered: function(){
        this.$('.has-tooltip, [data-toggle="tooltip"]').tooltip({container: 'body'});
    }
});

Template.filters_button.events({
    'click a': function(){
        $('html, body').animate({scrollTop : 0}, 300, 'easeInOutExpo');
    }
});
