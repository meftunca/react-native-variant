var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=useAccessibilityInfo;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=require("react");var _reactNative=require("react-native");function useAccessibilityInfo(){var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2.default)(_useState,2),reduceMotionEnabled=_useState2[0],setReduceMotionEnabled=_useState2[1];var _useState3=(0,_react.useState)(false),_useState4=(0,_slicedToArray2.default)(_useState3,2),screenReaderEnabled=_useState4[0],setScreenReaderEnabled=_useState4[1];var handleReduceMotionChanged=function handleReduceMotionChanged(enabled){return setReduceMotionEnabled(enabled);};var handleScreenReaderChanged=function handleScreenReaderChanged(enabled){return setScreenReaderEnabled(enabled);};(0,_react.useEffect)(function(){_reactNative.AccessibilityInfo.isReduceMotionEnabled().then(handleReduceMotionChanged);_reactNative.AccessibilityInfo.isScreenReaderEnabled().then(handleScreenReaderChanged);_reactNative.AccessibilityInfo.addEventListener('reduceMotionChanged',handleReduceMotionChanged);_reactNative.AccessibilityInfo.addEventListener('screenReaderChanged',handleScreenReaderChanged);return function(){_reactNative.AccessibilityInfo.removeEventListener('reduceMotionChanged',handleReduceMotionChanged);_reactNative.AccessibilityInfo.removeEventListener('screenReaderChanged',handleScreenReaderChanged);};},[]);return{reduceMotionEnabled:reduceMotionEnabled,screenReaderEnabled:screenReaderEnabled};}
//# sourceMappingURL=useAccessibilityInfo.js.map