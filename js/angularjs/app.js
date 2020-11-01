var app = angular.module('ticketingPlatform', []);
app.run(function($rootScope) {
    $rootScope.Currency = 'USD';
});
