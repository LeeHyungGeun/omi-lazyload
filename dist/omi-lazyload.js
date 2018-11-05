'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _omi = require('omi');

var _lazyload = require('./lazyload');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LazyLoad = (_temp = _class = function (_WeElement) {
  _inherits(LazyLoad, _WeElement);

  function LazyLoad() {
    _classCallCheck(this, LazyLoad);

    return _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).apply(this, arguments));
  }

  _createClass(LazyLoad, [{
    key: 'install',
    value: function install() {
      var props = this.props;
      this.data = _extends({}, this.props, {
        'data-src': props.src,
        src: undefined,
        type: undefined
      });
    }
  }, {
    key: 'installed',
    value: function installed() {
      _lazyload.observer.observe(this);
    }
  }, {
    key: 'render',
    value: function render(props, data) {
      var element = props.element ? props.element.toLowerCase() : 'img';
      return element === 'iframe' ? Omi.h('iframe', data) : Omi.h('img', data);
    }
  }]);

  return LazyLoad;
}(_omi.WeElement), _class.observe = true, _temp);


(0, _omi.define)('omi-lazyload', LazyLoad, true);
