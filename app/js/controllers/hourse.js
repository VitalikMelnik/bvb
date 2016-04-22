/**
 * Created by vitalik on 21.04.16.
 */
/**
 *@controller HorseController - controller for horses page
 *@param $scope {object}
 */
angular.module('app')
    .controller('HorseController', function ($scope) {
        $scope.horses = [{
            name: "Американський кінь",
            img: 'http://nachnivsesnachalo.ru/pleer%20dlia%20saita/2013/09/%D0%97%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0.jpg',
        },
            {
                name : "Арабський",
                img : 'http://cs304710.vk.me/v304710522/23d9/2woAc-udeic.jpg' ,
            }];
    });