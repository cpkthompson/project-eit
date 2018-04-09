angular.module('eitModule', [])
    .factory('eitService', function () {
        let list = ["Charles Thompson", "Philisiah Mwaluma"];


        let addEit = function (eit) {
            return list.push(eit);
        };

        return {
            list: list,
            addEit: addEit
        };
    });