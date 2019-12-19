import _defineProperty from"@babel/runtime/helpers/defineProperty";import _slicedToArray from"@babel/runtime/helpers/slicedToArray";var _jsxFileName="/Users/devloops/Desktop/reactNative/reactNativeMUI/src/Components/Core/BackDropModal.tsx";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}import React,{useEffect,useState}from'react';import{Modal,StyleSheet,View,TouchableWithoutFeedback,KeyboardAvoidingView}from'react-native';import SafeAreaView from'react-native-safe-area-view';var BackDropModal=function BackDropModal(_ref){var onClose=_ref.onClose,children=_ref.children,animationType=_ref.animationType,_ref$visible=_ref.visible,visible=_ref$visible===void 0?false:_ref$visible,_ref$fullScreen=_ref.fullScreen,fullScreen=_ref$fullScreen===void 0?false:_ref$fullScreen,_ref$backdropColor=_ref.backdropColor,backdropColor=_ref$backdropColor===void 0?'transparent':_ref$backdropColor;var _useState=useState(visible),_useState2=_slicedToArray(_useState,2),modalVisible=_useState2[0],setModalVisible=_useState2[1];useEffect(function(){return function(){return onClose&&onClose();};},[]);useEffect(function(){if(visible===true)setModalVisible(true);else if(backdropColor==='transparent')setModalVisible(visible);else setTimeout(function(){setModalVisible(visible);},200);},[visible]);return React.createElement(Modal,{transparent:true,supportedOrientations:['landscape','landscape-left','landscape-right','portrait','portrait-upside-down'],animated:true,hardwareAccelerated:true,animationType:animationType,visible:modalVisible,onDismiss:onClose,onRequestClose:onClose,__source:{fileName:_jsxFileName,lineNumber:41}},React.createElement(View,{pointerEvents:visible?'auto':'none',accessibilityViewIsModal:true,accessibilityLiveRegion:"polite",style:[StyleSheet.absoluteFill],__source:{fileName:_jsxFileName,lineNumber:56}},React.createElement(TouchableWithoutFeedback,{style:{zIndex:0},onPress:onClose,__source:{fileName:_jsxFileName,lineNumber:61}},React.createElement(View,{style:{flex:1,backgroundColor:backdropColor},__source:{fileName:_jsxFileName,lineNumber:62}})),React.createElement(SafeAreaView,{style:[fullScreen===true&&{backgroundColor:'white'},_objectSpread({},StyleSheet.absoluteFillObject,{justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf:'center',flexGrow:1,flexShrink:1,zIndex:999}),fullScreen&&{flex:1,height:'100%'}],pointerEvents:"box-none",__source:{fileName:_jsxFileName,lineNumber:69}},React.createElement(KeyboardAvoidingView,{behavior:"height",style:[{width:fullScreen?'100%':'80%',backgroundColor:'transparent',justifyContent:'center',alignSelf:'center'}],__source:{fileName:_jsxFileName,lineNumber:88}},children))));};export default BackDropModal;
//# sourceMappingURL=BackDropModal.js.map