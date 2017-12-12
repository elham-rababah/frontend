loginApp.controller('registerCtrl',['$scope','$http',($scope,$http) => {

    $scope.register= () =>
    {
    	//console.log($scope);
        $http.post('/api/register', {
        	fname:$scope.fname ,
        	lname:$scope.lname ,
        	email:$scope.email , 
        	password:$scope.password
        })
        .then(res => {
            //$scope.user = r.data;
        }, e => {
           // $scope.errorMessage = e.data.message;
        });
    }
}]);