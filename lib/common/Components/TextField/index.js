import Flat from './TextFieldFlat';
import Outlined from './TextFieldOutlined';
import Contained from './TextFieldContained';
export default {
  Flat,
  Outlined,
  Contained
}; // import React, {useState, useRef, useEffect} from 'react';
// import {
//   View,
//   TextInput,
//   Animated,
//   Easing,
//   StyleSheet,
//   Keyboard,
//   TextInputProps,
// } from 'react-native';
// import * as Palette from './../../Helpers/palette';
// import BottomBar from './BottomHelper';
// interface TextFieldProps extends TextInputProps {
//   variant?: 'outlined' | 'contained' | 'flat';
//   defaultValue?: string;
//   value?: string;
//   label?: string;
//   error?: boolean;
//   success?: boolean;
//   warning?: boolean;
//   count?: boolean;
//   multiLine?: boolean;
//   Left?: any;
//   Right?: any;
//   disabled?: boolean;
//   ripple?: boolean;
//   numberOfLines?: number;
//   helperText?: string;
//   bottomWrapperStyle?: object;
//   clearButtonMode?:
//     | 'never'
//     | 'while-editing'
//     | 'unless-editing'
//     | 'always'
//     | undefined;
//   placeholder?: string;
//   min?: number;
//   max?: number;
//   onChange?: (text: any) => void | null;
// }
// const TextField: React.FC<TextFieldProps> = ({
//   variant,
//   defaultValue,
//   label,
//   value,
//   error,
//   success,
//   warning,
//   count,
//   Left,
//   Right,
//   onChange,
//   disabled,
//   ripple,
//   helperText,
//   bottomWrapperStyle,
//   clearButtonMode,
//   placeholder,
//   min,
//   max,
//   ...rest
// }) => {
//   const [state, setStateBase] = useState<{nativeEvent: any; active: boolean}>({
//     active: false,
//     nativeEvent: {},
//   });
//   const labelAnim = useRef(new Animated.Value(0)).current;
//   const setState = (newState: any) => setStateBase({...state, ...newState});
//   useEffect(() => {
//     let count = value ? value.length : defaultValue ? defaultValue.length : 0;
//     setState({
//       nativeEvent: {eventCount: count, text: value || defaultValue},
//     });
//     count > 0 && _active();
//   }, []);
//   const _active = () => {
//       setState({active: true});
//       Animated.timing(labelAnim, {
//         toValue: 1,
//         easing: Easing.bezier(0.25, 0.5, 0.75, 0.1),
//         duration: 200,
//       }).start();
//     },
//     _passive = () => {
//       if (state.nativeEvent.eventCount > 0) return;
//       setState({active: false});
//       Animated.timing(labelAnim, {
//         toValue: 0,
//         easing: Easing.bezier(1, 0.75, 0.5, 0.25),
//         duration: 200,
//       }).start();
//     },
//     _onChange = (prop: any) => {
//       prop.nativeEvent.eventCount = prop.nativeEvent.text.length;
//       setState({nativeEvent: prop.nativeEvent});
//       if (max != undefined && prop.nativeEvent.text.length > max) return;
//       onChange && onChange(prop);
//     };
//   let borderWidth = disabled ? 1.5 : 1,
//     variantStyle =
//       variant === 'contained'
//         ? {
//             backgroundColor: '#fff',
//             borderTopLeftRadius: 4,
//             borderTopRightRadius: 4,
//             elevation: 2,
//             paddingTop: 4,
//             borderBottomWidth: borderWidth,
//           }
//         : variant === 'outlined'
//         ? {
//             backgroundColor: 'transparent',
//             borderRadius: 4,
//             borderWidth: borderWidth,
//             paddingTop: 0,
//           }
//         : {
//             borderBottomWidth: borderWidth,
//             borderRadius: 0,
//           },
//     outlineLabelStyle =
//       variant === 'outlined'
//         ? {
//             //   height: state.active ? 20 : "auto",
//             // backgroundColor: state.active ? 'white' : 'transparent',
//             width: 'auto',
//             padding: 3,
//           }
//         : {},
//     labelPosArr =
//       variant == 'outlined'
//         ? [16, -10]
//         : variant == 'contained'
//         ? [24, 8]
//         : [18, -6],
//     labelFontSize = labelAnim.interpolate({
//       inputRange: [0, 1],
//       outputRange: [16, 12],
//     }),
//     labelLocationTranslateY = labelAnim.interpolate({
//       inputRange: [0, 1],
//       outputRange: labelPosArr,
//     }),
//     colors = state.active ? Palette.blue500 : Palette.grey700;
//   colors = error
//     ? Palette.red500
//     : warning
//     ? Palette.amber800
//     : success
//     ? Palette.green500
//     : colors;
//   let style = StyleSheet.create({
//     container: {
//       minHeight: 56,
//       margin: 8,
//       // marginVertical: variant == "outlined" ? 8 : 6
//     },
//     wrapper: {
//       borderColor: colors,
//       paddingHorizontal: !variant ? 0 : 12,
//     },
//     contentWrapper: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       alignContent: 'center',
//       minHeight: 56,
//       minWidth: 280,
//       margin: 0,
//       padding: 0,
//     },
//     leftAction: {
//       fontSize: 20,
//       color: colors,
//       marginRight: 4,
//       marginLeft: !variant ? 4 : 0,
//       paddingTop:
//         variant === 'outlined' ? 14 : variant === 'contained' ? 10 : 12,
//       paddingBottom:
//         variant === 'outlined' ? 4 : variant === 'contained' ? 4 : 4,
//       marginBottom: 4,
//     },
//     rightAction: {
//       fontSize: 20,
//       color: colors,
//       marginLeft: 4,
//       marginRight: !variant ? 4 : 0,
//       marginBottom: 4,
//     },
//     label: {
//       position: 'absolute',
//       backgroundColor:
//         state.active && variant === 'outlined' ? 'white' : 'transparent',
//       // height: 18,
//       paddingHorizontal: 4,
//       top: 0,
//       left: Left ? 40 : variant === 'contained' ? 10 : !variant ? 0 : 12,
//       // bottom: 6,
//     },
//     labelWrapper: {
//       flex: 1,
//       zIndex: 999,
//       ...outlineLabelStyle,
//     },
//     fieldInput: {
//       flexGrow: 1,
//       height: '100%',
//       fontSize: 16,
//       color: Palette.grey700,
//       minHeight: 28,
//     },
//     bottomWrapper: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       paddingLeft: 14,
//       paddingRight: 8,
//       ...bottomWrapperStyle,
//     },
//     helperWrapper: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       alignSelf: 'center',
//       marginVertical: 6,
//     },
//     helperText: {
//       height: 16,
//       color: colors,
//       fontSize: 12,
//     },
//   });
//   return (
//     <View style={style.container}>
//       <Animated.View style={[style.wrapper, variantStyle]}>
//         {label && (
//           <Animated.View
//             style={[
//               style.label,
//               {
//                 transform: [
//                   {
//                     translateY: labelLocationTranslateY,
//                   },
//                 ],
//               },
//             ]}>
//             <View style={style.labelWrapper}>
//               <Animated.Text
//                 style={{
//                   color: colors,
//                   fontSize: labelFontSize,
//                 }}>
//                 {label}
//               </Animated.Text>
//             </View>
//           </Animated.View>
//         )}
//         <View style={style.contentWrapper}>
//           {Left && <Left style={style.leftAction} />}
//           <TextInput
//             placeholderTextColor={Palette.grey700}
//             placeholder={state.active ? '' : placeholder}
//             style={style.fieldInput}
//             onChange={_onChange}
//             onFocus={_active}
//             onBlur={_passive}
//             clearButtonMode={clearButtonMode}
//             //  clearButtonMode={clearButtonMode || "always"}
//             blurOnSubmit={true}
//             onSubmitEditing={Keyboard.dismiss}
//             {...rest}
//           />
//           {Right && <Right style={style.rightAction} />}
//         </View>
//       </Animated.View>
//       <BottomBar
//         helperText={helperText}
//         success={success}
//         error={error}
//         warning={warning}
//         count={count}
//         max={max}
//         bottomWrapperStyle={style.bottomWrapper}
//         helperTextStyle={style.helperText}
//         helperWrapperStyle={style.helperWrapper}
//         eventCount={state.nativeEvent ? state.nativeEvent.eventCount : 0}
//       />
//     </View>
//   );
// };
// export default TextField;