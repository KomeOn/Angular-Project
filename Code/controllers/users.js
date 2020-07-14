app.controller('users', ["$scope", "$http", "sampleService", function($scope, $http, sampleService){
    $http.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        $scope.persons = response.data;
    });
    $http.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(response){
        $scope.updates = response.data;
    });
    app.directive('targetBlank', function() {
      return {
        compile: function(element) {
          var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
          elems.attr("target", "_blank");
        }
      };
    });
    $scope.User_Clicked = function(val1, val2){
        sampleService.mySet(val1);
        console.log("Samlple:", sampleService);
        //console.log("val1:", val1);
        //console.log("val2:", val2);
        $http.get('https://jsonplaceholder.typicode.com/users', { params: { id: val2, name: val1}})
        .then(function(res){
          $scope.user = res.data;
          console.log($scope.user);
          $http.get('https://jsonplaceholder.typicode.com/posts', { params: { userId: val2}})
            .then(function(response){
                $scope.updates = response.data;
            });
        });
    };
}]);

