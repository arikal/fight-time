angular.module('FightTimeApp.controllers', []).
controller('fightersController', function($scope) {
    //var pOne = new Ninja();
    $scope.playerOne = [
      {
	  	type: "Samurai",
		health: 55,
		attack: 50,
		defence: 60,
		speed: 10,
		evade: 0.3,
      }
    ];

});
