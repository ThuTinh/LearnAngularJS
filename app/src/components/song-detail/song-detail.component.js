'use strict';
angular.module('songDetail')
    .component('songDetail', {
        templateUrl: 'src/components/song-detail/song-detail.template.html',

        controller: function songDetailController($scope, $routeParams, $location, Song) {

            Song.get({ id: $routeParams.id }).$promise.then(function (song) {

                $scope.nameSong = song.nameSong;
                $scope.singer = song.singer;
                $scope.composer = song.composer;
                $scope.releaseYear = song.releaseYear;
            });
            
            $scope.back = function(){
                $location.path('/songs');
            }
            $scope.save = function () {
                console.log( $routeParams.id );
                var song = {

                    nameSong: $scope.nameSong,
                    singer: $scope.singer,
                    composer: $scope.composer,
                    releaseYear: $scope.releaseYear
                }
                if ($routeParams.id!='add') {
                    Song.update({ id: $routeParams.id }, song).$promise.then(function(res){
                        $location.path('/songs');
                    })

                } else {
                    Song.save(song).$promise.then(function (res) {
                        $location.path('/songs');
                    })
                }

            }
        }
    });