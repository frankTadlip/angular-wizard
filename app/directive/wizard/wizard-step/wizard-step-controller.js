(function () {
    'user strict';

    angular.module('app')
        .directive('step', stepController);

    function stepController() {
        return {
            require: '^wizard',
            restrict: 'E',
            templateUrl: '/app/directive/wizard/wizard-step/wizard-step.html',
            transclude: true,
            scope: {
                title: '@'
            },
            replace: true,
            link: function (scope, element, attrs, wizardController) {
                wizardController.registerStep(scope)
            }
        }
    }

    function controller($scope) {

    }


})();