'use strict';
angular.module('songList')
    .component('songList', {
        templateUrl: 'src/components/song-list/song-list.template.html',

        controller: function songDetailController($scope, $location, Song) {
            $scope.songs = Song.query();
            $scope.editSong = function (id) {
                console.log(id);
                $location.path(`/songs/${id}`);
            }
            $scope.deleteSong = function (id) {
              Song.delete({id: id}).$promise.then(function(res){
                $scope.songs = Song.query();
              })
            }
            $scope.addSong = function(){
                $location.path("/songs/add");
            }
        }

    });
