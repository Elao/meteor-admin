Template.admin_layout.hooks({
    created: function(){
    },
    rendered: function(){
        this.autorun(function () {
            if (!this.subscriptionsReady()) {
                $('#loading').delay(0).fadeIn(400);
            } else {
                $('#loading').delay(200).fadeOut(400);
            }
        }.bind(this));
    },
});
