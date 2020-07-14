var i = 0, j = 0;
var jsonArray = [];
app.controller('posts', ["$scope", "$http", "sampleService",function($scope, $http, sampleSerivce){
    $http.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(response){
        $http.get('https://jsonplaceholder.typicode.com/users').then(function(res){
            console.log(response.data.length);
            while((i < response.data.length) && (j < res.data.length))
            {   
                if(response.data[i].userId == res.data[j].id)
                {
                    var jsonObject = response.data[i];
                    $.extend(jsonObject, {'name': res.data[j].name});
                    jsonArray.push(jsonObject);
                    i += 1;
                }
                else
                {
                    j += 1;
                }
            }
            console.log(jsonArray);
            $scope.blogs = jsonArray;
        });
            
    });
    $scope.Post_Clicked = function(val1, val2, val3){
        console.log(":",sampleSerivce.myGet());
        $scope.by = val1;
        $http.get('https://jsonplaceholder.typicode.com/posts', { params: { id: val2, userId: val3}})
        .then(function(res){
          $scope.stats = res.data;
          console.log($scope.user);
          console.log(val1);
        });
    };
}]);