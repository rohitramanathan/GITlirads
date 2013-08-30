angular.module('lirad', ['ui.bootstrap'])

.filter('filterall', function(){
    
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


.config (function ($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    
    $routeProvider 
    .when("/", {templateUrl:'/partials/home.html'});
    .when("/second", {template:'<h2> second page </h2>'});
    .otherwise({redirectTo : '/partials/home.html'})
});

function ctrl ($scope) {

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
var ModalDemoCtrl = function ($scope) {

  $scope.open = function () {
    $scope.shouldBeOpen = true;
  };

  $scope.close = function () {
    $scope.closeMsg = 'Closed at: ' + new Date();
    $scope.shouldBeOpen = false;
  };

  $scope.items = ['Corona enhancement ( only if arterial phase hyperenhancement checked)', 'Mosaic architecture, including nodule –in nodule',
'Blood products','Undistorted vessels','Parallels blood pool enhancement'];

  $scope.opts = {
    backdropFade: true,
    dialogFade:true
  };

};
