app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: "Bruschetta",
      description: "Grilled bread garlic, toamtoes, olive oil",
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: "Pizza",
      description: "Mozzarella, tomatoes, basil, balsmaic glaze.",
      price: 4.95
    },
    {
      name: "Juice",
      description: "Served with juicy juice.",
      price: 3.95
    },
    {
      name: "Donut",
      description: "Friend bread",
      price: 4.95
    },
  ];

}]);