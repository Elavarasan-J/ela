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



(function() {
  $(document).ready(function() {
    $(document).on('click', '.popover-btn', function(e) {
      $(this).parent().find('.custom-popover-wrap').toggle();
      return e.preventDefault();
    });
    $(document).on('click', '.popover-close', function(e) {
      $(this).parent().hide();
      return e.preventDefault();
    });
    $(document).on('click', '.edit-icon', function(e) {
      console.log('Executed');
      $(this).parents('.edit-wrap').children().find('.input-box').toggleClass('hidden');
      $(this).parents('.edit-wrap').children().find('.info-text').toggleClass('hidden');
      return e.preventDefault();
    });
    $(document).on('click', '.view-contact', function(e) {
      $('.contact-user:nth-child(n+8)').toggleClass('show-contact');
      return e.preventDefault();
    });
    $(document).on('click', '.dropdown-icon', function(e) {
      if ($(this).hasClass('fa-chevron-circle-down')) {
        $(this).toggleClass('fa-chevron-circle-up');
        $(this).parent().find('.dropdown-content').toggle();
      } else if (!$(this).hasClass('fa-chevron-circle-down')) {
        $(this).parent().find('.dropdown-content').toggle();
      }
      return e.preventDefault();
    });
    $(document).on('click', '.browse-button', function(e) {
      $(this).parent('.file-upload').children('.hidden-class').trigger('click');
      return e.preventDefault();
    });
    $(document).on('change', '.file-upload .hidden-class', function(e) {
      $(this).parent('.file-upload').children('.uploaded-file').append(e.target.value);
      console.log(e);
      return e.preventDefault();
    });
    return $(document).on('click', '.modal-btn', function(e) {
      var nextModal;
      e.preventDefault();
      nextModal = $(this).attr('data-target');
      $(this).closest('.modal').modal('hide');
      return $(nextModal).on('shown.bs.modal', function() {
        return $('body').addClass('modal-open');
      });
    });
  });

}).call(this);
