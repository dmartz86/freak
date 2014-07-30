app.controller('TransitionController', function TransitionController($scope, $http) {
    $scope.questions = [];
    $scope.questions.push({id: '62e7bdb2-3d57-4317-81fc-56b6c31945e1', name: 'Option 1', width: 1, type:'info'});
    $scope.questions.push({id: '62e7bdb2-3d57-4317-81fc-56b6c31945e2', name: 'Option 2', width: 2, type:'warning'});
    $scope.questions.push({id: '62e7bdb2-3d57-4317-81fc-56b6c31945e3', name: 'Option 4', width: 4, type:'danger' });
    $scope.questions.push({id: '62e7bdb2-3d57-4317-81fc-56b6c31945e7', name: 'Option 5', width: 3, type:'info' });
    $scope.questions.push({id: '62e7bdb2-3d57-4317-81fc-56b6c31945e7', name: 'Option 5', width: 3, type:'primary' });
    $scope.questions.push({id: '62e7bdb2-3d57-4317-81fc-56b6c31945e7', name: 'Option 5', width: 3, type:'success' });
});
