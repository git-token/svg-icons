'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('path', {
	d: 'M 350 250 L 550 250 L 550 350 L 350 450 L 150 350 L 150 150 L 350 50 L 550 150 ',
	fill: 'transparent',
	strokeLinejoin: "round",
	stroke: '#cc5333',
	strokeWidth: '42'
});

var _ref2 = _jsx('circle', {
	cx: '550',
	cy: '150',
	r: '42',
	fill: '#cc5333'
});

var _ref3 = _jsx('circle', {
	cx: '550',
	cy: '150',
	r: '22',
	fill: '#320551'
});

var _ref4 = _jsx('circle', {
	cx: '350',
	cy: '250',
	r: '42',
	fill: '#cc5333'
});

var _ref5 = _jsx('circle', {
	cx: '350',
	cy: '250',
	r: '22',
	fill: '#320551'
});

var _ref6 = _jsx('text', {
	x: '600',
	y: '450',
	fontSize: '520px',
	fill: '#fff'
}, void 0, 'GitToken');

var NavBarLogo = function (_Component) {
	_inherits(NavBarLogo, _Component);

	function NavBarLogo(opts) {
		_classCallCheck(this, NavBarLogo);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(NavBarLogo).call(this, opts));
	}

	_createClass(NavBarLogo, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var width = _props.width;
			var height = _props.height;
			var style = _props.style;
			var opacity = _props.opacity;


			opacity = opacity ? opacity : '0';
			width = width ? width : '100%';
			height = height ? height : '100%';
			style = style ? style : null;

			return _jsx('svg', {
				width: width,
				height: height,
				viewBox: '0 0 2500 1500',
				style: style
			}, void 0, _ref, _ref2, _ref3, _ref4, _ref5, _ref6);
		}
	}]);

	return NavBarLogo;
}(_react.Component);

exports.default = NavBarLogo;