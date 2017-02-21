import theme from './theme.js';

// Create app
var app = angular.module('myApp', ['react']);

// Theming:
const USE_THEME = false;
// const USE_THEME = true;
if (USE_THEME) {
    app.value('ModalComponent', EchoModal.default.getClass({theme}));
    app.value('ButtonComponent', EchoButton.default.getClass({theme}));

} else {
    app.value('ModalComponent', EchoModal.default.getClass());
    app.value('ButtonComponent', EchoButton.default.getClass());
}


// Create controller
app.controller('appCtrl', function($scope) {

    // NOTE: container props are applied at runtime
        // those specified by the modal_bundle.js are applied at build time

    $scope.modal_props =  {
        text        : 'Example text goes here. Something really long and informative would be great.',
        title       : 'Title of My Header',
        confirm_text: 'OK',
        cancel_text : 'CANCEL',
        handleClickConfirm: function(e) {
            console.log('CONFIRM', e);

        },
        handleClickCancel: function(e) {
            console.log('CANCEL', e);
        }
    };

    $scope.button_props =  {
        text: 'BUTTON'
    };

});