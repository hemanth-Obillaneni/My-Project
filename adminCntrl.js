app.controller("adminCntrl", function($scope, $location) {
    $scope.login = function() {
        var userName= $scope.admin.userName;
        var password = $scope.admin.password;
        var url="http://localhost:3000/login?userName="+$scope.user.userName+"&password="+$scope.user.pwd
    	$http.get(url)
        .then(function(response) {
            console.log(response)
        });
        if () {
        	$scope.adm=true;
           $location.path("");
        }else {
        	userName=''
        	password=''	
        	
            alert("invalid username and password");
        }
    };
    $scope.clear = function() {
    	userName=''
        password=''	
    }
});
