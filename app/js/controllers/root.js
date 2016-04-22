/**
 * Created by vitalik on 22.04.16.
 */
/**
 *@controller rootController - open modal window
 *@param $scope , $uibModal, $window
 */
angular.module('app')
    .controller('rootController', function ($scope, $uibModal, $window) {
        $scope.openModalHelp = function () {

            var openModalHelp = $uibModal.open({
                templateUrl: '/frontend_test_app/app/templates/helpModal.html',
                controller: 'modalHelpController'
            });

            openModalHelp.result.then(function () {
                $window.open('http://bvblogic.com/', '_blank');
            }, function () {
                console.log('допомога не потрібна');
            });
        };

    });