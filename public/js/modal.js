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

$scope.defbenignitems = [];
$scope.probbenignitems = [];
$scope.defbenignitems = [];


  $scope.opts = {
    backdropFade: true,
    dialogFade:true
  };

};