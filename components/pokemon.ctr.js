(function(app) {

    "use strict";
    app.controller("PokemonCtrl", PokemonCtrl);

    PokemonCtrl.$inject = ['$http', 'PokemonFactory'];
    function PokemonCtrl($http, PokemonFactory) {
        var vm = this;
        vm.pokemons = null;



        PokemonFactory.getPokemon()
        .then(function(resp) {
            vm.pokemons = resp.data.results;
            console.log(vm.pokemons);
        }).catch(function(err) {});
    }
})(window.angular.module('ngPokemon'));
