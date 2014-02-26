angular.module('FightTimeApp.controllers', []).
controller('fightersController', function($scope) {
    $scope.playerOne = [
      {
	  	type: "Samurai",
		health: 40,
		attack: 50,
		defence: 60,
		speed: 10,
		evade: 0.3,
      }
    ];
});
