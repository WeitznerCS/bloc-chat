(function() {
    function HomeCtrl(Room, Message, $uibModal) {
      this.rooms = Room.all;
      this.messages = [];

      this.setCurrentRoom = function (room) {
        console.log('room', room)
        this.currentRoom = room;

        this.messages = Message.getByRoomId(room.$id)
      }

      this.open = function() {
        var modalInstance = $uibModal.open({
          templateUrl: '/templates/roomModal.html',
          controller: 'RoomModalCtrl',
          controllerAs: 'roomModal'
        });

        modalInstance.result.then(function (roomName) {
          console.log('success', roomName);
          Room.add(roomName);
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };
    }

    angular
        .module('bloc-chat')
        .controller('HomeCtrl', ["Room", "Message", "$uibModal", HomeCtrl]);
})();
