'use strict';
angular.module('songDetail')
.component('songDetail',{
    templateUrl:'song-list/song-detail.template.html',
    // template:
    //  `
    //  <h2>{{title}}</h2>
    // `,
    controller: function songDetailController($scope){
        $scope.title = "AHIHI";
    }
});