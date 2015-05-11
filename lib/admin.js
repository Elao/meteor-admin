ElaoAdmin = {
    config: {
        router: {
            route_prefix: '/admin',
            default: {
                layoutTemplate: 'admin_layout',
                loadingTemplate: 'admin_loading',
                yieldRegions: {
                    'admin_navbar': {to: 'navbar'},
                    'admin_sidebar': {to: 'sidebar'},
                },
            }
        },
        layout: {
            title: 'Admin of App'
        }
    },
};
