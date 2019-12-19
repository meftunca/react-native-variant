var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _styleGenerator=require("./../../Helpers/styleGenerator");var _jsxFileName="/Users/devloops/Desktop/reactNative/reactNativeMUI/src/Components/Core/Surface.tsx";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var defaultThemeProps={paper:{backgroundColor:'white'},color:'black'};var Surface=function Surface(_ref){var _ref$padding=_ref.padding,padding=_ref$padding===void 0?[16,16]:_ref$padding,_ref$margin=_ref.margin,margin=_ref$margin===void 0?0:_ref$margin,_ref$elevation=_ref.elevation,elevation=_ref$elevation===void 0?0:_ref$elevation,style=_ref.style,_ref$direction=_ref.direction,direction=_ref$direction===void 0?'row':_ref$direction,justify=_ref.justify,_ref$cornerRaidus=_ref.cornerRaidus,cornerRaidus=_ref$cornerRaidus===void 0?2:_ref$cornerRaidus,_ref$alignContent=_ref.alignContent,alignContent=_ref$alignContent===void 0?'center':_ref$alignContent,alignItems=_ref.alignItems,_ref$overflow=_ref.overflow,overflow=_ref$overflow===void 0?'hidden':_ref$overflow,children=_ref.children,_ref$theme=_ref.theme,theme=_ref$theme===void 0?defaultThemeProps:_ref$theme,otherProps=(0,_objectWithoutProperties2.default)(_ref,["padding","margin","elevation","style","direction","justify","cornerRaidus","alignContent","alignItems","overflow","children","theme"]);var styleObject=_objectSpread({overflow:overflow,borderRadius:cornerRaidus},theme.paper,{flexDirection:direction,justifyContent:justify?justify:_react.default.Children.count(children)>1?'space-between':'center',alignContent:alignContent,alignItems:alignItems});var paddingControl=typeof padding==='number'||typeof padding==='string'?{padding:padding}:(0,_styleGenerator.directionRepeat)('padding',padding);var marginControl=typeof margin==='number'||typeof margin==='string'?{margin:margin}:(0,_styleGenerator.directionRepeat)('margin',margin);return _react.default.createElement(_reactNative.View,(0,_extends2.default)({},otherProps,{style:[styleObject,paddingControl,marginControl,style,(0,_styleGenerator.elevationShadowStyle)(elevation)],__source:{fileName:_jsxFileName,lineNumber:87}}),children);};Surface.displayName='Surface';var _default=Surface;exports.default=_default;
//# sourceMappingURL=Surface.js.map