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
            // show to the user welocme and redirect him to home page 
        }, e => {
           // $scope.errorMessage = e.data.message;
        });
    }
}]);