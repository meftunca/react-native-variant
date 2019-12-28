var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var _Ripple=_interopRequireDefault(require("../Core/Ripple"));var _Surface=_interopRequireDefault(require("../Core/Surface"));var _reactNative=require("react-native");var _Icon=_interopRequireDefault(require("../Core/Icon"));var _color=_interopRequireDefault(require("color"));var _Theming=require("../../Theming");var _Typography=_interopRequireDefault(require("../Core/Typography"));var _jsxFileName="/Users/devloops/Desktop/reactNative/reactNativeMUI/src/Components/Buttons/FAB.tsx";var FAB=function FAB(_ref){var children=_ref.children,_ref$paperProps=_ref.paperProps,paperProps=_ref$paperProps===void 0?{padding:[4,8],margin:2}:_ref$paperProps,_ref$color=_ref.color,color=_ref$color===void 0?'primary':_ref$color,label=_ref.label,style=_ref.style,dense=_ref.dense,_ref$size=_ref.size,size=_ref$size===void 0?24:_ref$size,iconFontFamily=_ref.iconFontFamily,rippleStyle=_ref.rippleStyle,labelProps=_ref.labelProps,onLayout=_ref.onLayout,theme=_ref.theme,contentContainerStyle=_ref.contentContainerStyle,icon=_ref.icon,props=(0,_objectWithoutProperties2.default)(_ref,["children","paperProps","color","label","style","dense","size","iconFontFamily","rippleStyle","labelProps","onLayout","theme","contentContainerStyle","icon"]);var themeControl=(0,_Theming.useTheme)(theme);var fabColor=color&&color in themeControl.color?themeControl.color[color]:color?color:themeControl.color.primary,foreColor=(0,_color.default)(fabColor).isDark()?'white':'black';return _react.default.createElement(_reactNative.View,{onLayout:onLayout,style:_reactNative.StyleSheet.flatten([{borderRadius:size*2,overflow:'hidden',margin:dense?8:16,padding:4},contentContainerStyle]),__source:{fileName:_jsxFileName,lineNumber:53}},_react.default.createElement(_Ripple.default,(0,_extends2.default)({},props,{rippleContainerBorderRadius:size,style:_reactNative.StyleSheet.flatten([rippleStyle,{borderRadius:size,overflow:'hidden'}]),rippleColor:(0,_color.default)(fabColor).isDark()?(0,_color.default)(fabColor).lighten(0.7).fade(0.1).toString():(0,_color.default)(fabColor).darken(0.4).fade(0.1).toString(),__source:{fileName:_jsxFileName,lineNumber:66}}),_react.default.createElement(_Surface.default,(0,_extends2.default)({},paperProps,{direction:"row",justify:"center",alignItems:"center",alignContent:"center",padding:dense?8:16,margin:0,style:_reactNative.StyleSheet.flatten([style,{backgroundColor:fabColor,borderRadius:size*2,height:dense&&label?48:dense?40:56,minWidth:dense?40:56}]),__source:{fileName:_jsxFileName,lineNumber:87}}),icon!==undefined&&_react.default.createElement(_Icon.default,{name:icon,color:foreColor,family:iconFontFamily,size:size,style:{marginRight:label?12:0},__source:{fileName:_jsxFileName,lineNumber:105}}),label!==undefined&&_react.default.createElement(_Typography.default,(0,_extends2.default)({color:foreColor,variant:"button",transform:"uppercase"},labelProps,{style:_reactNative.StyleSheet.flatten([labelProps==null?void 0:labelProps.style,{marginRight:20-(dense?8:16)}]),__source:{fileName:_jsxFileName,lineNumber:116}}),label))));};var _default=FAB;exports.default=_default;
//# sourceMappingURL=FAB.js.map