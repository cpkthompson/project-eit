angular.module('eit', ['eitModule'])
    .controller('EITController', ['eitService', function EITController(eitService) {

        this.name = ""
        

        if (this.editMode === true) {
            
        } else {
            this.addEit = function addEit() {
                return eitService.addEit(this.name);
            };
        };

        this.editMode = function editMode(){
            return eitService.editMode;
        }
        

        
    }])
    .controller('DetailController', ['eitService', function DetailController(eitService) {
        
        this.getCurrentEit = function getCurrentEit() {
            return eitService.getCurrentEit;
        };
        
    }])
    .controller('ListController', ['eitService', function ListController(eitService) {

        this.getEitList = function list() {
            return eitService.list;
        };

        this.setCurrentEit = function setCurrentEit (name){
            return eitService.setCurrentEit(name)
        }
    }]);