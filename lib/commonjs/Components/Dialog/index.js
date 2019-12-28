var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _Surface=_interopRequireDefault(require("../Core/Surface"));var _Typography=_interopRequireDefault(require("../Core/Typography"));var _BackDropModal=_interopRequireDefault(require("../Core/BackDropModal"));var _jsxFileName="/Users/devloops/Desktop/reactNative/reactNativeMUI/src/Components/Dialog/index.tsx";var roundPixel=_reactNative.PixelRatio.roundToNearestPixel(1);var DefaultSurface={direction:'column',justify:'flex-start',alignContent:'flex-start',alignItems:'flex-start',padding:[8,16],margin:0};var Header=function Header(_ref){var children=_ref.children,left=_ref.left,right=_ref.right,title=_ref.title,fullScreen=_ref.fullScreen,subtitle=_ref.subtitle,titleProps=_ref.titleProps,subtitleProps=_ref.subtitleProps,otherProps=(0,_objectWithoutProperties2.default)(_ref,["children","left","right","title","fullScreen","subtitle","titleProps","subtitleProps"]);return _react.default.createElement(_Surface.default,(0,_extends2.default)({},DefaultSurface,{padding:[16,8,8,fullScreen?16:24],margin:4,direction:"row",alignItems:"center"},otherProps,{__source:{fileName:_jsxFileName,lineNumber:45}}),left?left({style:{margin:4},size:48}):_react.default.createElement(_react.default.Fragment,null),_react.default.createElement(_reactNative.View,{style:{flex:1,marginHorizontal:left?8:0,justifyContent:'center'},__source:{fileName:_jsxFileName,lineNumber:53}},title&&_react.default.createElement(_react.default.Fragment,null,typeof title==='string'?_react.default.createElement(_Typography.default,(0,_extends2.default)({transform:"capitalize",variant:"h6",gutterBottom:2,contrast:0.87},titleProps,{__source:{fileName:_jsxFileName,lineNumber:62}}),title):title),subtitle&&_react.default.createElement(_react.default.Fragment,null,typeof subtitle==='string'?_react.default.createElement(_Typography.default,(0,_extends2.default)({transform:"capitalize",variant:"subtitle2",contrast:0.6},subtitleProps,{__source:{fileName:_jsxFileName,lineNumber:78}}),subtitle):subtitle)),right?right({}):_react.default.createElement(_react.default.Fragment,null));};var Content=function Content(_ref2){var children=_ref2.children,fullScreen=_ref2.fullScreen,otherProps=(0,_objectWithoutProperties2.default)(_ref2,["children","fullScreen"]);return _react.default.createElement(_Surface.default,(0,_extends2.default)({},DefaultSurface,{margin:[8,8,8,fullScreen?16:24],style:{flex:1}},otherProps,{__source:{fileName:_jsxFileName,lineNumber:100}}),children);};var Actions=function Actions(_ref3){var children=_ref3.children,style=_ref3.style,otherProps=(0,_objectWithoutProperties2.default)(_ref3,["children","style"]);return _react.default.createElement(_reactNative.View,(0,_extends2.default)({style:_reactNative.StyleSheet.flatten([{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',padding:8/roundPixel},style])},otherProps,{__source:{fileName:_jsxFileName,lineNumber:109}}),children&&_react.default.Children.map(children,function(Child){return _react.default.isValidElement(Child)?_react.default.cloneElement(Child,{transform:'uppercase',textProps:{weight:'500',contrast:1}}):Child;}));};Header.displayName='Header';Content.displayName='Content';Actions.displayName='Actions';var Dialog=function Dialog(_ref4){var children=_ref4.children,visible=_ref4.visible,animationType=_ref4.animationType,_ref4$fullScreen=_ref4.fullScreen,fullScreen=_ref4$fullScreen===void 0?false:_ref4$fullScreen,_ref4$backdropColor=_ref4.backdropColor,backdropColor=_ref4$backdropColor===void 0?'rgba(0,0,0,.55)':_ref4$backdropColor,onClose=_ref4.onClose,_ref4$duration=_ref4.duration,duration=_ref4$duration===void 0?300:_ref4$duration,delay=_ref4.delay,otherProps=(0,_objectWithoutProperties2.default)(_ref4,["children","visible","animationType","fullScreen","backdropColor","onClose","duration","delay"]);return _react.default.createElement(_BackDropModal.default,{visible:visible,fullScreen:fullScreen,onClose:onClose,duration:duration,delay:delay,backdropColor:backdropColor,animationType:fullScreen?'slide':animationType,__source:{fileName:_jsxFileName,lineNumber:161}},fullScreen&&_react.default.createElement(_reactNative.StatusBar,{backgroundColor:"white",barStyle:"dark-content",__source:{fileName:_jsxFileName,lineNumber:170}}),_react.default.createElement(_Surface.default,(0,_extends2.default)({direction:"column",padding:0,margin:0,justify:"space-between",alignItems:"flex-start",elevation:0,style:[fullScreen?{height:'100%',width:'100%',alignSelf:'stretch'}:{minHeight:110,minWidth:300,alignSelf:'center'}]},otherProps,{__source:{fileName:_jsxFileName,lineNumber:172}}),children&&_react.default.Children.map(children,function(Child){return _react.default.isValidElement(Child)?_react.default.cloneElement(Child,{fullScreen:fullScreen}):Child;})));};Dialog.Header=Header;Dialog.Content=Content;Dialog.Actions=Actions;var _default=Dialog;exports.default=_default;
//# sourceMappingURL=index.js.map