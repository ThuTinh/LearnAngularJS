'use strict';
angular.module('songManager')
.config(function($routeProvider){
    $routeProvider.
    when('/songs',{
        template: '<song-list></song-list>'
    }).
    when('/songs/:id',{
        template: '<song-detail></song-detail>'
    }).
    when('/songs/add',{
        template: '<song-detail></song-detail>'
    }).
    otherwise('/songs');
}
);