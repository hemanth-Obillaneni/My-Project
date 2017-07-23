app.controller("LoginController", function($scope, $location) {
    $scope.login = function() {
        var userName = $scope.userName;
        var password = $scope.password;
        if () {
           $location.path("/home" );
        }else {
        	$scope.userName=''
        	$scope.password=''	
        	
            alert("invalid username and password");
        	//$scope.x="invalid username/password"
            //$location.path("/login");
        }
    };
    $scope.clear = function() {
    	$scope.userName=''
        $scope.password=''
    }
    $scope.register = function() {
    	$location.path("/register" );	
    }
});
