(function() {
    angular
        .module("neweb")
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {
        var vm = this;
        vm.templates = {
            sobre: '/../views/sobre.html',
            portfolio: '../views/portfolio.html',
            contato: '../views/contato.html'
        };        
    }
})();
