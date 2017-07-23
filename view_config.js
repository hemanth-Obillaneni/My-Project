app.config([ "$routeProvider", "$locationProvider",
    function($routeProvider, $locationProvider) {   
        $routeProvider
        .when("/admin",{
    		templateUrl:"adminPortal.html",
    		controller: "adminCntrl"
        }).when("/DoctorRegister",{
    		templateUrl:"doctorRegister.html",
    		controller: "doctorRegisterCntrl"
        }).when("/DoctorLogin",{
    		templateUrl:"doctorLogin.html",
    		controller: "doctorLoginCntrl"
    	}).when("/PatientRegister",{
    		templateUrl:"patientRegister.html",
    		controller: "patientRegisterCntrl"
        }).when("/PatientLogin",{
    		templateUrl:"patientPortalhtml",
    		controller: "patientLoginCntrl"
        }).otherwise({
            redirectTo : 'index.html'
        })
    } 
]);