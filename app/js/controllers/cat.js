/**
 * Created by vitalik on 21.04.16.
 */
/**
 *@controller CatController - controller for cat page
 *@param $scope {object} 
 */
angular.module('app')
    .controller('CatController', function ($scope) {
        $scope.cats = [{
            name: "Абіссинська кішка",
            img: 'http://kotvokoshke.by/sites/default/files/styles/catalog_promo_block_h/public/shelter_cats/1_3.jpg?itok=EXB-dpl_',
        },
            {
                name : "Сіамський кіт",
                img : 'http://pixobox.org/_data/i/upload/2012/02/17/20120217024008-7beac96a-cu_s9999x200.jpg' ,
            }];
    });
