
/**
 * Module dependencies.
 */

var Observer = require('mutation-observer');

/**
 * Exports the `MutationObserver` based approach
 * or the fallback one depending on UA capabilities.
 */

module.exports = Observer
  ? require('./dom4')
  : document.addEventListener
    ? require('./dom3')
    : require('./fallback');
