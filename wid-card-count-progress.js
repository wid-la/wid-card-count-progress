'use strict';

(function () {

  Polymer({

    is: 'wid-card-count-progress',

    properties: {
      /**
       * level
       * @type {Boolean}
       */
      count: {
        type: Number,
        value: 0
      },

      /**
       * name
       * @type {String}
       */
      progression: {
        type: Number,
        value: 0
      },

      /**
       * title
       * @type {String}
       */
      graphData: {
        type: Object
      }

    }

  });
})();