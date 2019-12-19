var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var _Ripple=_interopRequireDefault(require("./../Core/Ripple"));var _Surface=_interopRequireDefault(require("./../Core/Surface"));var _reactNative=require("react-native");var _Icon=_interopRequireDefault(require("../Core/Icon"));var _Theming=require("Theming");var _jsxFileName="/Users/devloops/Desktop/reactNative/reactNativeMUI/src/Components/Buttons/IconButton.tsx";var IconButton=function IconButton(_ref){var children=_ref.children,_ref$paperProps=_ref.paperProps,paperProps=_ref$paperProps===void 0?{padding:[4,8],margin:2}:_ref$paperProps,_ref$color=_ref.color,color=_ref$color===void 0?'primary':_ref$color,_ref$role=_ref.role,role=_ref$role===void 0?'button':_ref$role,style=_ref.style,_ref$size=_ref.size,size=_ref$size===void 0?24:_ref$size,iconFontFamily=_ref.iconFontFamily,backgroundColor=_ref.backgroundColor,rippleStyle=_ref.rippleStyle,onLayout=_ref.onLayout,theme=_ref.theme,contentContainerStyle=_ref.contentContainerStyle,icon=_ref.icon,props=(0,_objectWithoutProperties2.default)(_ref,["children","paperProps","color","role","style","size","iconFontFamily","backgroundColor","rippleStyle","onLayout","theme","contentContainerStyle","icon"]);var themeControl=(0,_Theming.useTheme)(theme);var textColor=color&&color in themeControl.color?themeControl.color[color]:color?color:themeControl.color.text;return _react.default.createElement(_reactNative.View,{onLayout:onLayout,style:[{alignSelf:'flex-start',borderRadius:size*2,overflow:'hidden'},contentContainerStyle],__source:{fileName:_jsxFileName,lineNumber:49}},_react.default.createElement(_Ripple.default,(0,_extends2.default)({},props,{rippleContainerBorderRadius:size,style:[rippleStyle,{borderRadius:size,overflow:'hidden',padding:role==='chip'?0:4,justifyContent:'center',alignContent:'center',alignItems:'center'}],rippleColor:textColor,__source:{fileName:_jsxFileName,lineNumber:62}}),_react.default.createElement(_Surface.default,(0,_extends2.default)({},paperProps,{direction:"row",justify:"center",alignItems:"center",alignContent:"center",padding:0,margin:0,style:[style,{backgroundColor:backgroundColor||'transparent',borderRadius:size*2,height:role==='chip'?size:size*1.25,width:role==='chip'?size:size*1.25}],__source:{fileName:_jsxFileName,lineNumber:77}}),icon!==undefined&&_react.default.createElement(_Icon.default,{name:icon,color:textColor,family:iconFontFamily,size:size,__source:{fileName:_jsxFileName,lineNumber:95}}))));};var _default=IconButton;exports.default=_default;
//# sourceMappingURL=IconButton.js.map