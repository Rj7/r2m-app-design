(function(){


    //For some reason which i dont know vm works with tabledata and $scope works for the Modal pop
    //TO DO: Merge $scope and vm as single variable
    angular
        .module('app')
        .controller('MentorReportController', function($scope, $mdDialog, $mdMedia) {
            $scope.status = '  ';
            $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

            var vm = this;

            vm.tableData = [
                {
                    name: 'Raja',
                    progress: 40,
                    status: 'Level 5',
                    class: 'md-accent'
                },
                {
                    name: 'Suresh',
                    progress: 60,
                    status: 'Level 7',
                    class: 'md-accent'
                }
            ];

            //$scope.showStudentDetails = function($event){
            //    console.log('got it');
            //}
            //$scope.showAlert = function(ev) {
            //    // Appending dialog to document.body to cover sidenav in docs app
            //    // Modal dialogs should fully cover application
            //    // to prevent interaction outside of dialog
            //    $mdDialog.show(
            //        $mdDialog.alert()
            //            .parent(angular.element(document.querySelector('#popupContainer')))
            //            .clickOutsideToClose(true)
            //            .title('This is an alert title')
            //            .textContent('You can specify some description text in here.')
            //            .ariaLabel('Alert Dialog Demo')
            //            .ok('Got it!')
            //            .targetEvent(ev)
            //    );
            //};

            $scope.showConfirm = function(ev) {
                // Appending dialog to document.body to cover sidenav in docs app
                var confirm = $mdDialog.confirm()
                    .title('Would you like to delete this Student?')
                    .textContent('All of the Student data will be deleted.')
                    .clickOutsideToClose(true)
                    .ariaLabel('Delete')
                    .targetEvent(ev)
                    .ok('Please do it!')
                    .cancel("No. Don't Remove");
                $mdDialog.show(confirm).then(function() {
                    $scope.status = 'You decided to get rid of your debt.';
                }, function() {
                    $scope.status = 'You decided to keep your debt.';
                });
            };


            //$scope.showAdvanced = function(ev) {
            //    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
            //    $mdDialog.show({
            //            controller: DialogController,
            //            templateUrl: 'dialog1.tmpl.html',
            //            parent: angular.element(document.body),
            //            targetEvent: ev,
            //            clickOutsideToClose:true,
            //            fullscreen: useFullScreen
            //        })
            //        .then(function(answer) {
            //            $scope.status = 'You said the information was "' + answer + '".';
            //        }, function() {
            //            $scope.status = 'You cancelled the dialog.';
            //        });
            //    $scope.$watch(function() {
            //        return $mdMedia('xs') || $mdMedia('sm');
            //    }, function(wantsFullScreen) {
            //        $scope.customFullscreen = (wantsFullScreen === true);
            //    });
            //};

            $scope.showTabDialog = function(ev) {
                $mdDialog.show({
                        controller: DialogController,
                        templateUrl: 'app/views/partials/individual_student_report.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose:true
                    })
                    .then(function(answer) {
                        $scope.status = 'You said the information was "' + answer + '".';
                    }, function() {
                        $scope.status = 'You cancelled the dialog.';
                    });
            };
        });
    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }
})();
