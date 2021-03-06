  /**
   * -----------------------------------------------------
   * Public Method (prettify)
   * -----------------------------------------------------
   * @desc The prettifier for this app.
   * @param {string} solution - The problem's solution to be formatted.
   * @return {{
   *   result   : string,
   *   lineCount: number
   * }}
   */
  var prettify = (function() {

    var prettify = function(solution) {

      /** @type {{ result: string, lineCount: number }} */
      var result;

      checkArgs(solution, 'string');

      // Format the solution
      result = applyFormatting( prepareLines(solution) );

      return result;
    };

/* -----------------------------------------------------------------------------
 * The Prettifier Module Variables (pre-compiled-prettifier/prettify-vars.js)
 * -------------------------------------------------------------------------- */
// insert-prettify-vars

/* -----------------------------------------------------------------------------
 * The Prettifier Module Methods (pre-compiled-prettifier/prettify-methods.js)
 * -------------------------------------------------------------------------- */
// insert-prettify-methods

/* -----------------------------------------------------------------------------
 * The Highlight Syntax Method (pre-compiled-prettifier/highlight-syntax.js)
 * -------------------------------------------------------------------------- */
// insert-highlight-syntax

    return prettify;

  })();
