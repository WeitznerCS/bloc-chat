(function() {
    function RoomModalCtrl(Room, $uibModalInstance, $cookies) {
      this.ok = function () {
        Room.add(this.newRoom)
        $uibModalInstance.close(this.roomName);
      };

      this.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };

      this.createUsername = function () {
        $cookies.put('blocChatCurrentUser', this.username);
        $uibModalInstance.close();
      }
    }

    angular
        .module('bloc-chat')
        .controller('RoomModalCtrl', ["Room", "$uibModalInstance", "$cookies", RoomModalCtrl]);
})();
