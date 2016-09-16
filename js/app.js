/**
 * Created by GPDellKonto on 2016-09-16.
 */
define(function(){
    var mainModule = angular.module('app',[]);

    mainModule.factory('watchFactory', function($http){
        return{
            getTime:function () {
                return $http.get('https://proxna.github.io/CountdownPage/php/time.php').then(function (result) {
                    return result.data;
                });
            }
        }
    });

    mainModule.controller('mainCtrl', function($scope, $http, watchFactory){
        window.setInterval(function () {
            watchFactory.getTime().then(function(data){
                $scope.time=data;
            });
        },100);
    });
});
