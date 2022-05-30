
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-inappbrowser.inappbrowser",
          "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
          "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
          "cordova.InAppBrowser.open"
        ]
        },
      {
          "id": "cordova-plugin-native-spinner.SpinnerDialog",
          "file": "plugins/cordova-plugin-native-spinner/www/SpinnerDialog.js",
          "pluginId": "cordova-plugin-native-spinner",
        "clobbers": [
          "SpinnerDialog"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-inappbrowser": "5.0.0",
      "cordova-plugin-native-spinner": "1.1.3"
    };
    // BOTTOM OF METADATA
    });
    