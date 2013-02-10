/**
 * Expose `inserted`.
 */

exports = module.exports = inserted;

/**
 * Mapping of insert callbacks
 * @type {Object}
 */

exports.insertHandlers = {};

/**
 * Watch for insertion and invoke `fn(el)`.
 *
 * @param {String} sel
 * @param {Function} fn
 * @api public
 */

function inserted(sel, fn){
  exports.insertHandlers[sel] = fn;
}

/**
 * Global insert event listener
 * @param  {Object} event
 */

function insertListener(event){
  if (event.animationName == 'nodeInserted') {
    var el = event.target;
    var matchesSelector = function(sel) {
      if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(sel);
      } else if (el.mozMatchesSelector) {
        return el.mozMatchesSelector(sel);
      } else {
        return false;
      }
    }
    for (var sel in exports.insertHandlers) {
      if (matchesSelector(sel)) {
        exports.insertHandlers[sel](el);
        // el.classList.remove('inserted');
      }
    }
  }
}

document.addEventListener('animationstart', insertListener, false); // standard + firefox
// document.addEventListener('MSAnimationStart', insertListener, false); // IE
document.addEventListener('webkitAnimationStart', insertListener, false); // Chrome + Safari
