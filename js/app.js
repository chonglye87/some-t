var davApp = angular.module('davApp', [
  'ui.router',
  'wu.masonry',
  'davControllers'
]);

davApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('landing', {
      url: "/",
      templateUrl: "partials/landing.html",
      controller: 'LandingController'
    })
    .state('about', {
      url: "/about/",
      templateUrl: "partials/about.html",
      controller: 'AboutController'
    })
    .state('actions', {
      url: "/actions/",
      templateUrl: "partials/actions.html",
      controller: 'ActionsController'
    })
    .state('archive', {
      url: "/archive/",
      templateUrl: "partials/actions.html",
      controller: 'ActionsController'
    })
    .state('action', {
      url: "/actions/:id",
      templateUrl: "partials/action.html",
      controller: 'ActionsController'
    })


    .state('volunteers', {
      url: "/volunteers/",
      templateUrl: "partials/volunteers.html",
      controller: 'VolunteersController'
    })
    .state('companies', {
      url: "/companies/",
      templateUrl: "partials/companies.html",
      controller: 'CompaniesController'
    });

  $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.url();

      if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
          return;
      }

      if (path.indexOf('?') > -1) {
          return path.replace('?', '/?');
      }

      return path + '/';
  });

});


davApp.run(['$rootScope', '$timeout', function ($rootScope, $timeout) {
  $rootScope.$on('$stateChangeStart', function(event, to, toParams, from, fromParams) {
      if (from.name == "landing") {
        $.fn.fullpage.destroy('all');
      }

      $rootScope.performTransition = (from.name == "landing");
  });
  $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
      $timeout(function() {$rootScope.performTransition = false;}, 2500);
  });


}]);

davApp.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
        });
    };
});
