
module.exports = inserted;

/**
 * Watch for removal with a DOM3 Mutation Event.
 *
 * @param {Element} el
 * @param {Function} fn
 * @api private
 */

function inserted(el, fn) {
  function cb(mutationEvent) {
    var target = mutationEvent.target
      , children = [].slice.call(target.getElementsByTagName('*'))

    if (el === target || ~children.indexOf(el)) {
      fn(el);
      document.removeEventListener('DOMNodeInserted', cb);
    }
  }

  document.addEventListener('DOMNodeInserted', cb);
}
