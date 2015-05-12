Package.describe({
    name: 'elao:meteor-admin',
    version: '0.0.2',
    summary: 'Elao admin for Meteor',
    git: 'https://github.com/Elao/meteor-admin',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1');

    api.imply([
        'iron:router@1.0.7',
        'gfk:notifications@1.0.11',
        'elao:meteor-elaostrap@0.0.4',
        'fortawesome:fontawesome@4.2.0',
    ], 'client');

    api.use([
        'underscore',
        'templating',
        'iron:router',
        'gfk:notifications',
    ], 'client');

    api.export([
        'ElaoAdmin',
        'Notifications',
    ], 'client');

    api.add_files([
        'lib/admin.js',
        'lib/routing.js',
        'lib/notifications.js',
    ], 'client');

    api.add_files([
        'templates/layouts/layout.html',
        'templates/layouts/layout.js',
        'templates/layouts/layout.scss',
        'templates/layouts/loading.html',
        'templates/layouts/partials/navbar.html',
        'templates/layouts/partials/navbar.js',
        'templates/layouts/partials/sidebar.html',
        'templates/layouts/partials/breadcrumb.html',
        'templates/layouts/partials/breadcrumb.js',
        'templates/layouts/partials/filters.html',
        'templates/layouts/partials/filters.js',

        'templates/collections/list.html',
        'templates/collections/list.js',
        'templates/collections/edit.html',
        'templates/collections/edit.js',
    ], 'client');

    api.add_files([
        'templates/layouts/layout.scss',
    ], 'server');
});

Package.onTest(function(api) {
});
