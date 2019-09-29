'use strict';
angular.module('songService')
.factory('Song', function($resource){
    return $resource('http://localhost:8080/api/songs/:id',{},{
        update: 
        {
           method: 'PUT'
        }
    });
});
