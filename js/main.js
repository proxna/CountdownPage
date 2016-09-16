/**
 * Created by GPDellKonto on 2016-09-16.
 */
require.config({
    paths:{
        'angular':'../bower_components/angular/angular',
        'app':'app',
    },
    shim:{
        'app':{
            deps:['angular']//tutaj dopisuj moduły
        }
    }

});
require(['app'], function(){
    angular.bootstrap(document, ['app']);
});