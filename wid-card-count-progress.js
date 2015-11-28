'use strict';

(function () {

  Polymer({

    is: 'wid-card-count-progress',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior, Polymer.WidCardThemeBehavior],

    properties: {

      count: {
        type: Number,
        value: 0
      },

      progression: {
        type: Number,
        value: 0
      },

      graphData: {
        type: Object
      }

    },

    _themeChangedCard: function _themeChangedCard(themeName) {
      if (themeName !== null) {
        this.$.countImage.src = '/images/themes/' + themeName + '/users.svg';
      }
    }

  });
})();