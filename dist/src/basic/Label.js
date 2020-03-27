Object.defineProperty(exports,"__esModule",{value:true});exports.Label=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/basic/Label.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _nativeBaseShoutemTheme=require('native-base-shoutem-theme');var _mapPropsToStyleNames=require('../utils/mapPropsToStyleNames');var _mapPropsToStyleNames2=_interopRequireDefault(_mapPropsToStyleNames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Label=function(_Component){_inherits(Label,_Component);function Label(){_classCallCheck(this,Label);return _possibleConstructorReturn(this,(Label.__proto__||Object.getPrototypeOf(Label)).apply(this,arguments));}_createClass(Label,[{key:'render',value:function render(){var _this2=this;var _props=this.props,_props$TextComponent=_props.TextComponent,TextComponent=_props$TextComponent===undefined?_reactNative.Text:_props$TextComponent,props=_objectWithoutProperties(_props,['TextComponent']);return _react2.default.createElement(TextComponent,_extends({ref:function ref(c){return _this2._root=c;}},props,{__source:{fileName:_jsxFileName,lineNumber:11}}));}}]);return Label;}(_react.Component);Label.propTypes=_extends({},_reactNative.Text.propTypes,{style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),floatBack:_propTypes2.default.number});var StyledLabel=(0,_nativeBaseShoutemTheme.connectStyle)('NativeBase.Label',{},_mapPropsToStyleNames2.default)(Label);exports.Label=StyledLabel;
//# sourceMappingURL=Label.js.map