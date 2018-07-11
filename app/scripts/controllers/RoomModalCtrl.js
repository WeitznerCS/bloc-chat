(function() {
    function RoomModalCtrl(Room, $uibModalInstance) {
      this.ok = function () {
        Room.add(this.newRoom)
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
