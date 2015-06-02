var testapp = angular.module('testapp',[]);

testapp.controller('maincontrol',function ($scope) {
	$scope.fruitlist=[
		{id:0,name:'苹果',types:'水果',weight:100},
		{id:1,name:'梨子',types:'水果',weight:200},
		{id:2,name:'桃子',types:'水果',weight:150},
		{id:3,name:'西瓜',types:'水果',weight:300},
		{id:4,name:'黄瓜',types:'蔬菜',weight:250},
		{id:9,name:'冬瓜',types:'蔬菜',weight:220},
		{id:8,name:'西红柿',types:'蔬菜',weight:400},
		{id:7,name:'火龙果',types:'水果',weight:500},
		{id:6,name:'樱桃',types:'水果',weight:600},
		{id:5,name:'白菜',types:'蔬菜',weight:700}	
	];
	$scope.fruit='苹果';
});

testapp.directive('tuanzi',function() {
	var link =function($scope, $element, $attrs) {
		$scope.newfilter="id";
		$scope.change=function(x){
			console.log(x);
		}
	   $scope.showli=function(getindex) {
		 $element.find("li").removeClass('selected').eq(getindex).addClass('selected');
		 $scope.select = $scope.fruits[getindex].name;
	   };
	};
	return {
		link: link,
		restrict: 'C',
		template:'<p><input placeholder="输入要过滤的字" ng-model="searchText"></p>'+
		'<p><select ng-change="change(x)" ng-model="x">'+
		'<option selected="selected" value="id">id</option>'+
		'<option value="name">name</option>'+
		'<option value="weight">weight</option>' +
		'</select></p>'+
		'<ul ng-init="tab=0">'+
		'<li ng-click="showli( $index )" ng-class="{ selected: tab === $index }"  ng-repeat="fruit in fruits | filter:searchText ">'+
		'<span>id:{{fruit.id}}</span><span>name:{{fruit.name}}</span><span>types:{{fruit.types}}</span>'+
		'<span>weight:{{fruit.weight}}</span>'+
		'</li></ul>',
		scope:{
			select:'=',
			fruits:'='
		}
	};
});