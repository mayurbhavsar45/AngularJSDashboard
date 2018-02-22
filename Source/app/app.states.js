altairApp
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
            $urlRouterProvider
                .when('/dashboard', '/')
                .otherwise('/');

            $stateProvider
                 // -- ERROR PAGES --
                .state("error", {
                    url: "/error",
                    templateUrl: 'app/views/error.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_uikit'
                            ]);
                        }]
                    }
                })
                .state("error.404", {
                    url: "/404",
                    templateUrl: 'app/components/pages/error_404View.html'
                })
                .state("error.500", {
                    url: "/500",
                    templateUrl: 'app/components/pages/error_500View.html'
                })
                 // -- LOGIN PAGE --
                .state("login", {
                    url: "/login",
                    templateUrl: 'app/views/loginView.html',
                    controller: 'loginCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_uikit',
                                'lazy_iCheck',
                                'lazy_selectizeJS',
                                'app/controllers/loginController.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'Login'
                    }
                })
                 // -- My PROFILE PAGE --
                .state("restricted.myprofile", {
                    url: "/myprofile",
                    templateUrl: 'app/views/account/myProfile.html',
                    controller: 'myProfileCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_uikit',
                                'lazy_iCheck',
                                'app/controllers/myProfileController.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'MyProfile'
                    }
                })
                 // -- My ACCOUNT PAGE --
                .state("restricted.myaccount", {
                    url: "/myaccount",
                    templateUrl: 'app/views/account/myAccountInfo.html',
                    controller: 'accountCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_uikit',
                                'lazy_iCheck',
                                'app/controllers/accountController.js'
                            ]);
                        }]
                    },
                    data: {
                        pageTitle: 'MyAccount'
                    }
                })
                 // -- RESTRICTED --
                .state("restricted", {
                    abstract: true,
                    url: "",
                    templateUrl: 'app/views/restricted.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'lazy_uikit',
                                'lazy_selectizeJS',
                                'lazy_switchery',
                                'lazy_prismJS',
                                'lazy_autosize',
                                'lazy_iCheck',
                                'lazy_themes'
                            ]);
                        }]
                    }
                })
                 // -- DASHBOARD --
                .state("restricted.dashboard", {
                    url: "/",
                    templateUrl: 'app/views/dashboard/adminDashboardView.html',
                    controller: 'adminDashBoardCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                // ocLazyLoad config (app/app.js)
                                'bower_components/angular-resource/angular-resource.min.js',
                                'lazy_countUp',
                                'lazy_charts_peity',
                                'lazy_charts_easypiechart',
                                'lazy_charts_metricsgraphics',
                                'lazy_charts_chartist',
                                'lazy_weathericons',
                                'lazy_clndr',
                                'lazy_google_maps',
                                'lazy_datatables',
                                'app/controllers/administratorDashboadController.js'
                            ], { serie: true });
                        }]
                    },
                    data: {
                        pageTitle: 'Dashboard'
                    },
                    ncyBreadcrumb: {
                        label: 'Home'
                    }
                })
                 // --COMPANY DASHBOARD --
                .state("restricted.companydashboard", {
                    url: "/company_dashboard",
                    templateUrl: 'app/views/dashboard/compnayDashboardView.html',
                    controller: 'companyDashBoardCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                // ocLazyLoad config (app/app.js)
                                'lazy_countUp',
                                'lazy_charts_peity',
                                'lazy_charts_easypiechart',
                                'lazy_charts_metricsgraphics',
                                'lazy_charts_chartist',
                                'lazy_weathericons',
                                'lazy_clndr',
                                'lazy_google_maps',
                                'app/controllers/companyDashboardController.js'
                            ], { serie: true });
                        }]
                    },
                    data: {
                        pageTitle: 'Company Dashboard'
                    }
                })
                 // --  COMPANY USERS PAGE --        
                .state("restricted.companyusers", {
                     url: "/companyusers",
                     templateUrl: 'app/views/account/companyUsers.html',
                     controller: 'companyusersCtrl',
                     resolve: {
                         deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                             return $ocLazyLoad.load([
                                 'app/controllers/companyUsersController.js'
                             ], { serie: true });
                         }],
                         contact_list: function ($http) {
                             return $http({ method: 'GET', url: 'data/contact_list.json' })
                                 .then(function (data) {
                                     return data.data;
                                 });
                         }
                     },
                     data: {
                         pageTitle: 'Company Users'
                     }
                 })

        }
    ]);
