angular.module('loginApp', [])
    .controller('loginController', function ($scope) {
        $scope.login = function () {
            if ($scope.username === 'inventory' && $scope.password === 'inventoryPassword' && $scope.role === 'InvTeam') {
                alert('Logged in as Inventory Team');
            } else if ($scope.username === 'delivery' && $scope.password === 'deliveryPassword' && $scope.role === 'DLTeam') {
                alert('Logged in as Delivery Team');
            } else {
                alert('Invalid username, password, or role');
            }
        };
    });