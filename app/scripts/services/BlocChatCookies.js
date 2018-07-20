(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/login.html',
        size: 'sm',
        controller:'RoomModalCtrl as modal',
        keyboard: false,
        backdrop: 'static'
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
