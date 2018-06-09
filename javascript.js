angular.module('portalApp')
.controller('marketPlaceCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.answer = {data:""};
	$scope.items = [
		{
			title:'Clothing',
			tags: ['Shirts', 'Shoes', 'Shorts'],
			details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			title:'Furniture',
			tags: ['Chairs', 'Tables', 'Accessories'],
			details: 'Mauris cursus, sapien et malesuada ultrices, purus sapien iaculis tellus, quis semper magna est at leo.'
		},
		{
			title:'',
			tags: ['tag A', 'tag H'],
			details: 'Donec id quam eu odio feugiat sagittis. Duis a tempus neque. Praesent elementum quis ante quis commodo. Sed tincidunt aliquet dolor sit amet laoreet. '
		},
		{
			title:'Item 4',
			tags: ['tag I'],
			details: 'Proin sem quam, rutrum id ante id, scelerisque tempor quam. Curabitur pharetra turpis at sem placerat, non vehicula ligula tincidunt.'
		},
		{
			title:'Item 5',
			tags: ['tag C', 'tag K', 'tag B'],
			details: 'Mauris nec ultricies metus. Cras et dictum justo. Nam a ullamcorper dolor. Cras fringilla metus vel facilisis vehicula.'
		},
		{
			title:'Item 6',
			tags: ['tag A', 'tag B', 'tag C'],
			details: 'Curabitur scelerisque lorem risus, in luctus orci hendrerit non. Praesent quis tellus dapibus dolor consectetur volutpat.'
		}
	];
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('marketPlaceMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;		
		$scope.portalHelpers.showView('marketPlaceDetails.html', 2);
	}
    
    $scope.showForm = function(item){
        console.log($scope.answer);
    	if(item=='buy') $scope.portalHelpers.showView('buyForm.html', 1);
        else {
        	$scope.portalHelpers.showView("shirtsForm.html", 1);
        }
    }
    /*
    $scope.showForm = function(item) 
    {
     	if(item=='shirts')
            $scope.portalHelpers.showView('shirtsForm.html',1);
    }
    */
}]);