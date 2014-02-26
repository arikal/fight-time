angular.module('FightTimeApp.controllers', []).
controller('warriorsController', function($scope) {
	$scope.playerOne = [
		{
			type: "Samurai",
			health: 50,
			attack: 65,
			defence: 25,
			speed: 95,
			evade: 0.4
		}
	];
	$scope.playerTwo = [
		{
			type: "Brawler",
			health: 95,
			attack: 70,
			defence: 45,
			speed: 50,
			evade: 0.33
		}
	];
});