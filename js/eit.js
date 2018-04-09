angular.module('eit', ['eitModule'])
    .controller('EITController', ['eitService', function EITController(eitService) {

        this.name = "";

        this.list = function list() {
            return eitService.list;
        };

        this.addEit = function addEit() {
            return eitService.addEit(this.name);
        };
    }]);