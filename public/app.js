var app = angular.module('lirads', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

app.config(function($routeProvider,$locationProvider){
   // $locationProvider.html5Mode(true);
   $routeProvider
    .when('/',{'templateUrl' : '/partials/main.html'})
    .when('/lirads',{'templateUrl' : '/partials/liradscomplete.html'})
    //.otherwise({redirectTo : '/'})
});

app.filter('filterall', function(){
    
    return function(userlirads, query, $scope){
        var returnarray = [];
        var majorcat = "0";
        if (
        (((query.washout.id)=="true") && ((query.capsule.id)=="false"||"null") && ((query.growth.id)=="false"||"null")) || 
        (((query.capsule.id)=="true") && ((query.washout.id)=="false"||"null") && ((query.growth.id)=="false"||"null")) || 
        (((query.growth.id)=="true") && ((query.capsule.id)=="false"||"null") && ((query.washout.id)=="false"||"null"))
        )
        {   majorcat= 1;          
        }
        if (
        (((query.washout.id)=="true") && ((query.capsule.id)=="true") && ((query.growth.id)=="false"||"null")) || 
        (((query.washout.id)=="true") && ((query.growth.id)=="true") && ((query.capsule.id)=="false"||"null")) || 
        (((query.capsule.id)=="true") && ((query.growth.id)=="true") && ((query.washout.id)=="false"||"null"))
        )
        {   majorcat =2;          
        }
         if(
        ((query.washout.id)=="true") && 
        ((query.capsule.id)=="true") && 
        ((query.growth.id)=="true")
        )
        {   majorcat = 3;
            
        }
          if(
        ((query.washout.id)=="false") && 
        ((query.capsule.id)=="false") && 
        ((query.growth.id)=="false")
        )
        {    majorcat = 0;
        }
        console.log(majorcat);
        //alert(major);
   
        
        if((query.benign.id) == "Definitely")
                    { returnarray = [{code:"LIRADS 1"}];
                    }
        else if((query.benign.id)== "Probably")
                   { returnarray = [{code:"LIRADS 2"}];
                    }
        
        else if ((query.mass.id)== "null") {
           for(i = 0;i<userlirads.length;i++){ 
            returnarray[i] = userlirads[i]
            }
        }
        else if (((query.mass.id)=="false") && ((query.benign.id)=="Neither"))
        {   returnarray = [{code:"LIRADS3"}]; 
        }
        
        else {
        for (i=0; i< userlirads.length;i++)  
        {  if(((userlirads[i].benign.id)==(query.benign.id))&&
            ((userlirads[i].mass.id)==(query.mass.id))&&
             ((userlirads[i].nonhcc.id)==(query.nonhcc.id))&&
             ((userlirads[i].tumorinvein.id)==(query.tumorinvein.id))&&      
             ((userlirads[i].major) == majorcat)
             )
                    { returnarray[i] = userlirads[i];    }           

        }
        }
        
        return returnarray;
    };
});

function ctrl ($scope) {
    
    $scope.setActive = function (type) {
    $scope.homeActive = '';
    $scope.liradsActive = '';
    $scope.aboutActive = '';
    $scope.contactActive = '';
    $scope[type + 'Active'] = 'active';
    }
    
 $scope.study = null;
  $scope.filter = {
    diameter: "null",
    benign: {id:"null"},
    mass: {id:"null"},
    nonhcc: {id:"null"},
    tumorinvein: {id: "null"},
    arterial: "null",
    washout: {id: "null"},
    capsule: {id: "null"},
    growth: {id: "null"},
    
    
    };

}

