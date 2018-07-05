(function() {
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;

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
        .controller('HomeCtrl', ["Room", "$uibModal", HomeCtrl]);
})();
