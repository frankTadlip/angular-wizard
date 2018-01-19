(function () {
    'user strict';

    angular.module('app')
        .directive('wizard', wizard);

    function wizard() {
        return {
            templateUrl: '/app/directive/wizard/wizard.html',
            transclude: true,
            replace: true,
            scope: {
                onSubmit: '&',
                icon: '=',
                title: '@'
            },
            controller: function ($scope) {
                $scope.steps = [];

                this.registerStep = function (step) {
                    $scope.steps.push(step);
                    // initial load of wizard per step
                    if ($scope.steps.length > 1) {
                        $scope.currentStepIndex = 0;
                        $scope.steps[$scope.currentStepIndex].currentStep = true;
                    }
                }

                $scope.toggleStep = function (index) {
                    $scope.steps[$scope.currentStepIndex].currentStep = false;
                    $scope.currentStepIndex = index;
                    $scope.steps[$scope.currentStepIndex].currentStep = true;
                }

                $scope.showPreviousStep = function () {
                    $scope.toggleStep($scope.currentStepIndex - 1);
                }

                $scope.showNextStep = function () {
                    $scope.toggleStep($scope.currentStepIndex + 1);
                }

                $scope.hasNext = function () {
                    return $scope.currentStepIndex < ($scope.steps.length - 1);
                }

                $scope.hasPrevious = function () {
                    return $scope.currentStepIndex > 0;
                }

                $scope.showSubmitAndBackToStart = function () {
                    return $scope.steps.length - 1 == $scope.currentStepIndex;
                }

                $scope.backToStart = function () {
                    $scope.toggleStep($scope.currentStepIndex - ($scope.steps.length - 1));
                }

            }
        }
    }


})();