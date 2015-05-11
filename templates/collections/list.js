Template.collections_list.helpers({
    items: function(){
        return [];
    },
    breadcrumb: function(){
        return [];
    },
});

Template.collections_list.events({
    'click tr': function(e, t){
        Router.go('admin_edit', {collection: t.data.collection, id: this._id});
    },
});

Template.collections_filters.helpers({
    schema: function(){
        return new SimpleSchema({});
    },
    doc: function(){
        return Router.current().location.get().queryObject;
    }
});
