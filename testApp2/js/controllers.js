var testapp=angular.module('testApp', ['ng']);

testapp.controller('MainCtrl',function($scope){

    $scope.fruit='苹果';
	
});

testapp.directive('tuanzi',function() {

	return{
		restrict: "C",
		scope:{
			select:'='
		},
		template:'<ul><li>苹果</li><li>梨子</li><li>香蕉</li></ul>',
		link:function(scope,element) {

            function init(data) {
                console.log(data);
                for(var i=0; i<=element.find('li').length-1; i++){
                    if(element.find('li').eq(i).html()==data){
                       // console.log('success');
                        element.find('li').removeClass('selected').eq(i).addClass('selected');
                    }
                }
            }
            scope.$watch('select', function() {
              // console.log(scope.select);
                init(scope.select);

            })
			element.find('li').bind('click',function() {
                scope.getindex=jQuery(this).index();
                element.find('li').removeClass('selected').eq(scope.getindex).addClass('selected');
                scope.$apply(function () {
                    scope.select=element.find('li').eq(scope.getindex).html();
                    console.log(scope.select);
                })

			})
			
		}
	}
});

