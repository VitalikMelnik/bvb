/**
 * Created by vitalik on 22.04.16.
 */
/**
 *@controller modalHelpController - controller for modal menu
 *@param $scope , $uibModalInstance - click button ok || cancel
 */
angular.module('app')
    .controller('modalHelpController', function ($scope, $uibModalInstance) {
        $scope.ok = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });
