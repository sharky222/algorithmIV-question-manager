  /**
   * -----------------------------------------------------
   * Public Class (SearchBarConfig)
   * -----------------------------------------------------
   * @desc The configuration settings for the search bar in this app.
   * @param {Object} config - The user's search bar config settings.
   * @constructor
   */
  var SearchBarConfig = function(config) {

    config.url = config.url || {};

    /**
     * ---------------------------------------------------
     * Public Property (SearchBarConfig.debug)
     * ---------------------------------------------------
     * @desc The Debug instance for the SearchBarConfig class.
     * @type {Debug}
     */
    this.debug = aIV.debug({
      classTitle     : 'SearchBarConfig',
      turnOnDebuggers: 'args fail'
    });

    this.debug.start('init', config);
    this.debug.args('init', config, 'object');

    /**
     * ----------------------------------------------- 
     * Public Property (SearchBarConfig.defaults)
     * -----------------------------------------------
     * @desc The default search options to display upon app init.
     * @type {?DefaultsSearchBarConfig}
     */
    this.defaults = null;

    /**
     * ----------------------------------------------- 
     * Protected Property (SearchBarConfig.stage)
     * -----------------------------------------------
     * @desc Whether to display the stage search option.
     * @type {boolean}
     * @private
     */
    var stage;

    /**
     * ----------------------------------------------- 
     * Protected Property (SearchBarConfig.source)
     * -----------------------------------------------
     * @desc Whether to display the source search option.
     * @type {boolean}
     * @private
     */
    var source;

    /**
     * ----------------------------------------------- 
     * Protected Property (SearchBarConfig.category)
     * -----------------------------------------------
     * @desc Whether to display the category search option.
     * @type {boolean}
     * @private
     */
    var category;

    /**
     * ----------------------------------------------- 
     * Protected Property (SearchBarConfig.subCat)
     * -----------------------------------------------
     * @desc Whether to display the sub category search option.
     * @type {boolean}
     * @private
     */
    var subCat;

    /**
     * ----------------------------------------------- 
     * Public Method (SearchBarConfig.get)
     * -----------------------------------------------
     * @desc Gets a config setting.
     * @param {string} part - The name of the setting to get.
     * @return {boolean}
     */
    this.get = function(part) {
      /** @private */
      var result;
      /** @private */
      var settings = {
        stage   : stage,
        source  : source,
        category: category,
        subCat  : subCat
      };

      result = (settings[part] !== undefined) ? settings[part] : null;
      return result;
    };


    // Set the properties
    stage    = (config.stage    !== false);
    source   = (config.source   !== false);
    category = (config.category !== false);
    subCat   = (config.subCat   !== false);
  };

  // Ensure constructor is set to this class.
  SearchBarConfig.prototype.constructor = SearchBarConfig;

  /**
   * -------------------------------------------------------
   * Public Method (SearchBarConfig.prototype.setDefaults)
   * -------------------------------------------------------
   * @desc Sets the search defaults to the user's settings.
   * @param {Object} defaults - The user's search defaults.
   * @param {Object} names - The available search names.
   * @param {Object} ids - The available search ids.
   * @param {number} quesLen - The number of user's questions.
   */
  SearchBarConfig.prototype.setDefaults = function(defaults, names, ids, quesLen) {

    // Debugging vars
    var args;
    this.debug.start('init', defaults, names, ids, quesLen);
    args = [ 'init' ];
    args.push(defaults, 'object', names, 'object');
    args.push(ids, 'object', quesLen, 'number');
    this.debug.args(args);

    this.defaults = new DefaultsSearchBarConfig(defaults, names, ids, quesLen);
  };
