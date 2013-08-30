function liradscontrol($scope){

 $scope.liradsdefs = [

  //"lr1": 
      {
          "code": "lirads1",
          "mass":["false"],
          "nonhcc":["false"],
          "benign":["Definitely"],
          "diameter":["greaterthantwenty","tentonineteen","lessthan10"],
          "arterial": ["null"],
        },
    //"lr2":
        {   "code":"lirads2",
            "mass":["false"],
            "nonhcc":["false"],
            "benign":["Probably"],
            "diameter":["greaterthantwenty","tentonineteen","lessthan10"],
            "arterial" :["null"],
        },
   //"lr3":
        {
            "code":"lirads3",
            "mass":["false"],
            "nonhcc":["false"],
            "benign":["Neither"],
            "diameter":["greaterthantwenty","tentonineteen","lessthan10"],
            "arterial" : ["null"],
           // "major":[0],
        },
   //"lr5v":
        {
        "code":"lirads5v",
        "mass":["true"],
        "nonhcc":["false"],
        "tumorinvein":["true"],
        "benign":["Neither"],
        "diameter":["greaterthantwenty","tentonineteen","lessthan10"],
        "arterial" :["null"],
        "major":[0],
        },
     //lr3  - mass,hypo/iso,w/ 0 cats    
          {
        "code":"lirads3",
        "mass":["true"],
        "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "diameter": ["greaterthantwenty","tentonineteen","lessthan10"],
        "arterial" :["hypo","iso"],
        "major":[0],
        },
        //lr3 - mass, hyper, w/ 0 cats, <20     
          {
        "code":"lirads3",
        "mass":["true"],
       "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "diameter": ["tentonineteen","lessthan10"],
        "arterial" :["hyper"],
        "major":[0],
        },
            //lr3 - mass, hypo, w/ 1 cat, <20     
          {
        "code":"lirads3",
        "mass":["true"],
       "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "diameter": ["tentonineteen","lessthan10"],
        "arterial" :["hypo", "iso"],
        "major":[1],
        },
        //lr4a  - iso
        {
        "code":"lirads4a",
        "mass":["true"],
       "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "arterial" : ["iso","hypo"],
        "major":[2],
        "diameter": ["tentonineteen","lessthan10"],
        },
          //lr4a - hypo  
        {
        "code":"lirads4a",
        "mass":["true"],
        "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "arterial" :["iso","hypo"],
        "major":[3],
        "diameter":["tentonineteen","lessthan10"],
        },
          //lr4a - hyper 
        {
        "code":"lirads4a",
        "mass":["true"],
        "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "arterial" : ["hyper"],
        "major":[1],
        "diameter":["tentonineteen","lessthan10"],
        },
            //lr4a - hyper, less than 10 
        {
        "code":"lirads4a",
        "mass":["true"],
        "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "arterial" : ["hyper"],
        "major":[2],
        "diameter":["lessthan10"],
        },
            //lr4a - hyper, less than 10, MC3
        {
        "code":"lirads4a",
        "mass":["true"],
        "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "arterial" : ["hyper"],
        "major":[3],
        "diameter":["lessthan10"],
        },
                //lr4b - hyper, >20 
        {
        "code":"lirads4b",
        "mass":["true"],
        "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "arterial" :["hyper"],
        "major":[0],
        "diameter":["greaterthantwenty"],
        },
        //lr4b - hypo, 1MC, >20 
        {
        "code":"lirads4b",
        "mass":["true"],
        "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "arterial":["hypo", "iso"],
        "major":[1],
        "diameter":["greaterthantwenty"],
        },
          //lr4b - iso, 2MC, >20 
        {
        "code":"lirads4b",
        "mass":["true"],
        "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "arterial" : ["hypo","iso"],
        "major":[2],
        "diameter":["greaterthantwenty"],
        },
            //lr4b - iso, 3MC, >20 
        {
        "code":"lirads4b",
        "mass":["true"],
        "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "arterial" : ["hypo","iso"],
        "major":[3],
        "diameter":["greaterthantwenty"],
        },
         //lr5a - hypre, 2MC, 10-19  
           {
        "code":"lirads5a",
        "mass":["true"],
        "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "arterial" : ["hyper"],
        "major":[2],
        "diameter":["tentonineteen"],
        },
        //lr5a - hypre, 3MC, 10-19  
           {
        "code":"lirads5a",
        "mass":["true"],
        "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "arterial" : ["hyper"],
        "major":[3],
        "diameter":["tentonineteen"],
        },
           //lr5b, hyper, 1MC, >20
           {
        "code":"lirads5b",
        "mass":["true"],
       "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "arterial" : ["hyper"],
        "major":[1],
        "diameter":["greaterthantwenty"],
        },
        //lr5b, hyper, >20, >2mc
           {
        "code":"lirads5b",
        "mass":["true"],
        "nonhcc":["false"],
        "tumorinvein":["false"],
        "benign":["Neither"],
        "arterial" : ["hyper"],
        "major":[2],
        "diameter":["greaterthantwenty"],
        },
           //lr5b, hyper, >20, >3mc
           {
        "code":"lirads5b",
        "mass":["true"],
        "nonhcc":["false"],
        "tumorinvein":["false"],
       "benign":["Neither"],
        "arterial" : ["hyper"],
        "major":[3],
        "diameter":["greaterthantwenty"],
        },
    //"om":
        {
        "code":"othermalignancy",
        "mass":["true"],
        "nonhcc":["true"],
        "tumorinvein":["null","false"],
        "benign":["Neither"],
        "diameter": ["greaterthantwenty","tentonineteen","lessthan10"],
        "arterial" : ["null"],
        }
    
]
}
// 
//     "LIRADS 2": 
//     {
//       "code": "LIRADS2",
//       "category": "Probably benign",
//       "concept": "High probability observation is benign",
//       "definition": " Observation with imaging features suggestive but not diagnostic of benign entity",
//       "reporting": "May be reported at radiologist’s discretion. Exception: If reported Benign LR3, LR4, or LR5 on the prior exam, usually should be reported.",
// 	  "management": "Continued routine surveillance usually is appropriate",
//         
//       "mass":"No",
// 	  "nonhcc.id":"No",
// 	  "benign":"Probable",
//       
//       },
//     "OM":
// 	{
// 	"code":"OM",
// 	"mass":"Yes",
// 	"nonhcc.id":"Yes",
// 	"benign":"Neither",
// 	}
// 
//    "LIRADS 3": 
//    {
// 	 "code" : "LIRADS3",
// 	 "category":"Intermediate probability for HCC.",
// 	 "definition": "Observation that does not meet criteria for other LI-RADS categories.",
// 	 "concept": "Both HCC and benign entity have moderate probability.",
// 	 "reporting": "Should be reported if no LR4, LR5, or OM observations are present elsewhere in the liver. If LR4, LR5, or OM observations are present, may be reported at radiologist’s discretion",
// 	 "management" : "Variable follow-up (depends on observation size, stability, and clinical considerations)",
// 
// 	  "mass":"No",
// 	  "nonhcc.id":"No",
// 	  "benign":"Definite",
// 	
// 	
// 	},
// 	
// 	"LIRADS 4": 
// 	{
// 	 "code" : "LIRADS4",
// 	 "category":"Probably HCC",
// 	 "concept": "High probability observation is HCC but there is not 100% certainty.",
// 	 "definition": "Observation with imaging features suggestive but not diagnostic of HCC.",
// 	 "reporting": "Should be reported if no LR4, LR5, or OM observations are present elsewhere in the liver, If LR4, LR5, or OM observations are present, may be reported at radiologist’s discretion",
// 	 "management" : "Variable follow-up (depends on observation size, stability, and clinical considerations)",
// 	
// 	  "mass":"Yes",
// 	  "nonhcc":"No",
// 	  "benign":"Definite",
// 	
// 	},
