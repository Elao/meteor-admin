Template.pagination.helpers({
    hasPagination: function(){
        return this.count > this.per_page;
    },
    activeClass: function(parent){
        return this == parent.page ? 'active' : '';
    },
    links: function(){
        var proximity  = 2;
        var startPage  = this.page - proximity;
        var endPage    = this.page + proximity;
        if (startPage < 1) {
            endPage = Math.min(endPage + (1 - startPage), this.nb_pages);
            startPage = 1;
        }
        if (endPage > this.nb_pages) {
            startPage = Math.max(startPage - (endPage - this.nb_pages), 1);
            endPage = this.nb_pages;
        }

        var links = [];
        for (var cursor = startPage ; cursor <= endPage ; cursor++) {
            links.push(cursor);
        }

        return links;
    },
    previous: function(){
        return this.page > 1 ? this.page - 1 : false;
    },
    next: function(){
        return this.page < this.nb_pages ? this.page + 1 : false;
    },
    link_to: function(page){
        var query = _.extend(_.clone(Router.currentParams().query), {
            page: page
        });

        return Router.currentPath({query: query});
    }
});

Template.per_page_selector.helpers({
    selected: function(parent){
        return this == parent.per_page ? 'selected' : '';
    },
    links: function(){
        var links = [5, 10, 20, 50];

        return links;
    }
});

Template.per_page_selector.events({
    'change select': function(evt){
        var query = _.extend(Router.currentParams().query, {
            page: 1,
            per_page: Number($(evt.target).val())
        });

        Router.currentGo({query: query});
    }
});
