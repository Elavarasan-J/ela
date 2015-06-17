var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
	$scope.color = "text-green";
	$scope.changeClass = function(){
		if ($scope.color === 'text-green')
		{
			$scope.color = "text-red";
		}
		else
		{
			$scope.color = "text-green";
		}
	}
});

app.directive('uploader', function () {
    return {
      restrict: 'E',
      link: function(scope, element) {	
        
        element.find("button").bind("click", function(){
          element.find("input")[0].click();
            
          element.find("input").bind("change",function(){
            scope.name = element.find("input").val();
			  
            scope.$apply(); 
              console.log('File name' +scope.name)
          })
        });
      }
     }
	});

app.directive('datepicker',function(){
	return{
		restrict : 'A',
		link : function(scope, element)
		{
			element.datepicker();	
		}
	}
});



