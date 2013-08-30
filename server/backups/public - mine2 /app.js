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

//          for (i=0; i< userlirads.length;i++)  
//         {  if(((userlirads[i].benign)==(query.benign)))
//             { if(((userlirads[i].mass)==(query.mass)))
//                 { 
//                   if(((userlirads[i].nonhcc)==(query.nonhcc)))
//                     { returnarray[i] = userlirads[i];    
//                     }
//                     
//                 }
//                 else returnarray[i] = userlirads[i];
//                 
//             }
//             else 
//                 returnarray[i] = userlirads[i];
// 
//         }
        
        if((query.benign) == "Definitely")
       { returnarray = [{code:"LIRADS 1"}];
       }
        else if((query.benign)== "Probably")
         { returnarray = [{code:"LIRADS 2"}];
         }
        else {
        for (i=0; i< userlirads.length;i++)  
        {  if(((userlirads[i].benign)==(query.benign))&&
            ((userlirads[i].mass)==(query.mass))&&
             ((userlirads[i].nonhcc)==(query.nonhcc))&&
             ((userlirads[i].tumorinvein)==(query.tumorinvein))&&      
             ((userlirads[i].major) == majorcat)
             )
                    { returnarray[i] = userlirads[i];    }           

        }
       }
        
        return returnarray;
    };
});


    // .config (pageRouter);
    // function pageRouter($routeProvider){
//     $routeProvider 
//     .when('/', {template:'<h3> first page </h3>'});
//     .when('/second', {template:'<h2> second page </h2>'});
// }

function ctrl ($scope) {

 $scope.study = null;
  $scope.filter = {
    diameter: "null",
    benign: "null",
    mass: "null",
    nonhcc: "null",
    tumorinvein: "null",
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
