angular.module('eitModule', [])
    .factory('eitService', function () {
        let list = ["Charles Thompson", "Philisiah Mwaluma"];

        let getCurrentEit;
        let editMode = false;

        let addEit = function (eit) {
            return list.push(eit);
        };

        let setCurrentEit = function (eit){
            this.editMode = true;
            return this.getCurrentEit = eit;
        }

        return {
            list: list,
            addEit: addEit,
            setCurrentEit: setCurrentEit,
            getCurrentEit: getCurrentEit,
            editMode: editMode,
        };
    });