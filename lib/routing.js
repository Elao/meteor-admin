/**
 * Map Elao Admin routes on Router
 */
Router.mapElaoAdminRoutes = function(){
    this.map(function() {

        // dashboard
        this.route('admin_dashboard', _.extend(_.clone(ElaoAdmin.config.router.default), {
            path: ElaoAdmin.config.router.route_prefix + '/',
        }));

        // list
        this.route('admin_list', _.extend(_.clone(ElaoAdmin.config.router.default), {
            path: ElaoAdmin.config.router.route_prefix + '/:collection',
            onBeforeAction: function(){
                Session.set(this.params.collection + '_filters', this.location.get().search);

                this.next();
            },
            waitOn: function(){
                return Meteor.subscribe(this.params.collection + '_list');
            },
            data: function(){
                return {
                    collection: this.params.collection,
                };
            },
            action: function(){
                this.render();
                this.render(this.params.collection + '_list');
            }
        }));

        // new
        this.route('admin_new', _.extend(_.clone(ElaoAdmin.config.router.default), {
            path: ElaoAdmin.config.router.route_prefix + '/:collection/new',
            waitOn: function(){
                return Meteor.subscribe(this.params.collection + '_new');
            },
            data: function(){
                return {
                    collection: this.params.collection,
                };
            },
            action: function(){
                this.render();
                this.render(this.params.collection + '_new');
            },
        }));

        // edit
        this.route('admin_edit', _.extend(_.clone(ElaoAdmin.config.router.default), {
            path: ElaoAdmin.config.router.route_prefix + '/:collection/:id',
            waitOn: function(){
                return Meteor.subscribe(this.params.collection + '_edit', this.params.id);
            },
            data: function(){
                return {
                    collection: this.params.collection,
                    id: this.params.id,
                };
            },
            action: function(){
                this.render();
                this.render(this.params.collection + '_edit');
            },
        }));
    });
};
