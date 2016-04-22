/**
 * Created by vitalik on 21.04.16.
 */
/**
 *@controller DogController - controller for dog page
 *@param $scope {object}
 */
angular.module('app')
    .controller('DogController', function ($scope) {
        $scope.dogs = [{
            name: "Німецька вівчарка",
            img: 'http://womanadvice.ru/sites/default/files/imagecache/width_250/chem_otlichaetsya_nemeckaya_ovcharka_ot_vostochnoevropeyskoy_0.jpg',
        },
            {
                name : "Сибірський хаскі",
                img : 'http://pesikot.org/upload/iblock/b4a/b4a87e76e7907d0019881dc9ebdb1b14.jpg' ,
            }];
    });