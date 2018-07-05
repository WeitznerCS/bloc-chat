(function() {
    function RoomModalCtrl(Room, $uibModalInstance) {
      this.ok = function () {
        $uibModalInstance.close(this.roomName);
      };

      this.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }

    angular
        .module('bloc-chat')
        .controller('RoomModalCtrl', ["Room", "$uibModalInstance", RoomModalCtrl]);
})();
