var app = angular.module('app',[]);


app.controller('mainController', function($scope){

    $scope.newClass = ''


    $scope.changeClass = function(){
      //  $scope.newClass = $scope.newClass === 'full-screan' ? '' : 'full-screan'

        if($scope.newClass === 'full-screan'){
           $scope.newClass = ''
        } else{
            $scope.newClass = 'full-screan'
  
        }

        
       
    }

    $scope.minimizeFunc = function(){

        if($scope.newClass === 'full-screan' || $scope.newClass === ''){
            $scope.newClass = 'minimized'
        }
    }


}); 