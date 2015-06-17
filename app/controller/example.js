huyuApp.directive('datepicker', function() {
	return {
		type: 'A',
		link: function(scope,element,attrs) {
			setTimeout(function() {
			$(element).datepicker({
			changeMonth: true, 
			changeYear: true,
			minDate: new Date('1896/01/01'),
			yearRange: '1896:c',
			dateFormat:'yy-mm-dd',
			maxDate: "0D"
			});
			}, 300);
		}
	};
});

huyuApp.directive('datepickernormal', function() {
return {
type: 'A',
link: function(scope,element,attrs) {
$(element).datepicker()
}
};
});


	huyuApp.directive('picker', function() {
	return {
	type: 'A',
	scope: {
	dob: '@',
	},
	link: function(scope,element,attrs) {
	setTimeout(function() {
	$(element).datepicker({ 
	changeMonth: true, 
	changeYea
	r: true,
						defaultDate: new Date(attrs.dob),
					yearRange: '1896:c',
					dateFormat:'yy-mm-dd',
					maxDate: "0D"
				});	
			}, 300);
			
		}
	};
});

huyuApp.filter('fromNow', function() {
	return function(date) {
		moment.locale('en', {
				relativeTime : {
				        future: "Just now",
				        past:   "%s ago",
				        s:  "%d seconds",
				        m:  "a minute",
				        mm: "%d minutes",
				        h:  "an hour",
				        hh: "%d hours",
				        d:  "a day",
				        dd: "%d days",
				        M:  "a month",
				        MM: "%d months",
				        y:  "a year",
				        yy: "%d years"
				    }
				});
	return moment(date).fromNow();
	}
});



huyuApp.directive('loading',   ['$http' ,function ($http)
    {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs)
            {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function (v)
                {
                    if(v){
                        elm.show();
                    }else{
                        elm.hide();
                    }
                });
            }
        };

    }]);