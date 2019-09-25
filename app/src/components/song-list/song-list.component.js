'use strict';
angular.module('songList')
.component('songList',{
    // templateUrl: './song-list.template.html',
    template: `
    <h1>{{title}}</h1>
    `,
    controller: function songDetailController($scope){
        $scope.title = "HUHU";
       
    }
});
