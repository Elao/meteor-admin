Template.collections_edit.hooks({
    rendered: function(){
        this.$('.select2').select2();
    }
});

Template.collections_edit.helpers({
    doc: function(){
        return {};
    },
    collectionFilters: function(){
        return Session.get(this.collection + '_filters');
    },
    breadcrumb: function(){
        return [];
    },

    // for delete btn
    onRemoveError: function(){
        return function (error) {
            console.log(error);
            Notifications.error('Error', "Item not removed !");
        };
    },
    onRemoveSuccess: function(){
        return function (result) {
            Notifications.success('Success', "Remove successful !");

            var collection = Router.current().params.collection;
            if (collection) {
                var collection_filters = Session.get(collection + '_filters');
                Router.go('admin_list', {collection: collection}, {
                    query: collection_filters
                });
            }
        };
    },
});
