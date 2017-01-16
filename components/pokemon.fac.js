(function(app) {

	"use strict";

	app.factory("PokemonFactory", PokemonFactory);

	PokemonFactory.$inject = ['$http'];
	function PokemonFactory($http) {
		return {getPokemon: getPokemon};

		function getPokemon() {
			return $http.get('http://pokeapi.co/api/v2/pokemon/?limit=151');
		}

	}
})(window.angular.module('ngPokemon'));
