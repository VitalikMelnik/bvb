/**
 * Created by vitalik on 21.04.16.
 */

/**
 *@controller submit - controller for contact us
 *@param $scope {object}
 */

angular.module('app'    )
    .controller('submit', function ($scope) {

        $scope.messages = [{
            email : "vitalikmelnik20000@gmail.com",
            message : "Hi. You can help mi?"
        }];

        /**
         *@function $scope.submitForm -
         *@param task {object} -
         */
        $scope.submitForm = function() {

            if($scope.userForm.$valid){
                
                $scope.messages.push($scope.task);
                $scope.task = {};
                $scope.userForm.name.$pristine = true;
                $scope.userForm.email.$pristine = true;
                console.log($scope.messages)
                $scope.goCats = true;



                };



        };

    });
