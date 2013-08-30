var app = angular.module('lirads', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

app.config(function($routeProvider,$locationProvider){
   $routeProvider
    .when('/',{'templateUrl' : '/partials/main.html'})
    .when('/lirads',{'templateUrl' : '/partials/lirads.html'})
    .otherwise({redirectTo : '/'})
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

var ModalDemoCtrl = function ($scope) {

  $scope.open = function () {
    $scope.shouldBeOpen = true;
  };

  $scope.close = function () {
    $scope.closeMsg = 'Closed at: ' + new Date();
    $scope.shouldBeOpen = false;
  };

  $scope.hccitems = ['Corona enhancement ( only if arterial phase hyperenhancement)', 'Mosaic architecture, including nodule –in nodule',
'Blood products','Undistorted vessels','Parallels blood pool enhancement'];

    $scope.benignitems = [ 'Homogeneous marked T2 hyper-intensity','Homogeneous marked T2 or T2* hypo-intensity',
'Undistorted vessels',
'Parallels blood pool enhancement',
'Diameter reduction',
'Diameter stability ≥ 2 years'];

$scope.diameteritems = ['Diameter should be measured in the sequence, phase, and imaging plane in which the margins are most sharply demarcated and in which there is no anatomic distortion. If margins are sharply demarcated on more than one sequence or phase, do not measure in the arterial phase.',
'Rationale: apparent diameter in the arterial phase is variable, depending on exact timing of image acquisition. Also, perilesional enhancement in the arterial phase might be misconstrued as part of hyper-enhancing mass.',
'If a mass is surrounded by or is contiguous with a perfusion alteration, do not include the perfusion alteration in the measurement.',
'For masses with nodule-in-nodule or multi- nodule-in-nodule architecture, include the entire mass in the measurement, not just the internal nodule(s) ',
'One key diameter threshold is < 20mm vs. ≥ 20mm. In conjunction with other major features, this threshold is used to categorize as LR3, LR4, or LR5 masses that are neither definite benign entities nor probable benign entities and that lack features of non-HCC malignancy or tumor in vein. This threshold is also used to designate LR4 and LR5 observations as A or B.',
'Rationale: compared to ≥ 20mm observations, < 20mm observations are less likely to be HCC and more difficult to characterize at CT and MRI, and hence they must satisfy stricter criteria to be assigned an equivalent LR category.',
];

  $scope.opts = {
    backdropFade: true,
    dialogFade:true
  };

};