'use strict';

var paulasRidesApp = angular.module('paulasRidesApp', []);

paulasRidesApp.controller('PaulasRidesCtrl', function($scope) {
  $scope.rides = [
    { "id": 1,
      "name": "Ridiculously Photogenic Guy",
      "img": "handsomeGuy.jpg"
    },
    { "id": 2,
      "name": "The Buttjay",
      "img": "butterJay.png"
    },
    { "id": 3,
      "name": "One Direction",
      "img": "oneDirection.gif"
    },
    { "id": 4,
      "name": "A Space Chicken",
      "img": "chicken.jpg"
    },
    { "id": 5,
      "name": "Kim Jong's Supreme Advisor",
      "img": "kimJong.png"
    },
    { "id": 6,
      "name": "Butter",
      "img": "butter.png"
    }
  ]
});