import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  ViewStyle,
  View,
  TouchableWithoutFeedbackProps,
  StyleProp,
  Animated,
  Easing,
  Platform,
  TouchableWithoutFeedback,
  I18nManager,
  GestureResponderEvent,
  Alert,
} from 'react-native';
import Color from 'color';
const radius = 10;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    backgroundColor: 'transparent',
    overflow: 'hidden',
  },

  ripple: {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    overflow: 'hidden',
    position: 'absolute',
  },
});
export interface RippleProps extends TouchableWithoutFeedbackProps {
  disabled?: boolean;
  // children?: string | React.ReactNode | JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
  rippleColor?: string;
  rippleOpacity?: number;
  rippleDuration?: number;
  rippleSize?: number;
  rippleContainerBorderRadius?: number;
  rippleCentered?: boolean;
  rippleSequential?: boolean;
  rippleFades?: boolean;
  nativeID?: any;
  buttonRef?: any;
  onRippleAnimation?: () => void | null;
  //   theme: Theme;
}
// const RippleBase: any = Platform.select({
//   android: TouchableNativeFeedback,
//   ios: TouchableHighlight,
// });
// const Ripple: React.FC<RippleProps> = ({
//   accessibilityRole = 'button',
//   children,
//   style,
//   rippleColor,
//   borderLess = false,
//   background = Platform.OS === 'android'
//     ? TouchableNativeFeedback.SelectableBackground()
//     : '',
//   ...rippleProps
// }) => {
//   return (
//     <RippleBase
//       delayPressIn={200}
//       delayPressOut={200}
//       delayLongPress={200}
//       style={[style, {overflow: 'hidden'}]}
//       accessibilityRole={accessibilityRole}
//       background={
//         rippleColor
//           ? TouchableNativeFeedback.Ripple(rippleColor, borderLess)
//           : background
//       }
//       {...rippleProps}>
//       {children}
//     </RippleBase>
//   );
// };
let unique = 0,
  mounted = false;
const Ripple: React.FC<RippleProps> = ({
  disabled = false,
  hitSlop,
  pressRetentionOffset,
  children,
  rippleContainerBorderRadius = 0,
  testID,
  nativeID,
  accessible,
  onPressIn,
  onPressOut,
  delayPressIn = 150,
  delayPressOut = 150,
  delayLongPress = 500,
  accessibilityHint,
  accessibilityLabel,
  onPress,
  onLongPress,
  buttonRef,
  onLayout,
  onRippleAnimation = (animation: any, callback: Function | undefined) =>
    animation.start(callback),
  rippleColor = 'rgb(0, 0, 0)',
  rippleOpacity = 0.2,
  rippleDuration = 260,
  rippleSize = 0,
  rippleCentered = false,
  rippleSequential = true,
  rippleFades = false,
  ...props
}) => {
  const [state, setBaseState] = useState({width: 0, height: 0, ripples: []});
  const setState = (newState: any) => setBaseState({...state, ...newState});
  const backgroundColorRipple = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    mounted = true;
    return () => {
      mounted = false;
      unique = 0;
      setBaseState({width: 0, height: 0, ripples: []});
    };
  }, []);

  const onLayoutFunc = (event: any) => {
      let {width, height} = event.nativeEvent.layout;

      if ('function' === typeof onLayout) {
        onLayout(event);
        setState({width, height});
      }
    },
    onPressFunc: any = (event: GestureResponderEvent) => {
      let {ripples} = state;
      if (!rippleSequential || !ripples.length) {
        if ('function' === typeof onPress) {
          requestAnimationFrame(() => onPress(event));
          startRipple(event);
        }
      }
    },
    onLongPressFunc = (event: any) => {
      if ('function' === typeof onLongPress) {
        requestAnimationFrame(() => onLongPress(event));

        Animated.timing(backgroundColorRipple, {
          toValue: 1,
          duration: rippleDuration,
          easing: Easing.bounce,
        }).start();
        startRipple(event);
      } else if ('function' === typeof onPress) {
        Animated.timing(backgroundColorRipple, {
          toValue: 1,
          duration: rippleDuration,
          easing: Easing.bounce,
        }).start();
        startRipple(event);
      }
    },
    onPressInFunc: any = (event: any) => {
      if ('function' === typeof onPressIn) {
        onPressIn(event);
      }
    },
    onPressOutFunc: any = (event: any) => {
      if ('function' === typeof onPressOut) {
        onPressOut(event);
        Animated.timing(backgroundColorRipple, {
          toValue: 0,
          duration: rippleDuration,
          easing: Easing.bounce,
          delay: 1000,
        }).start();
      } else if ('function' === typeof onPress) {
        Animated.timing(backgroundColorRipple, {
          toValue: 0,
          duration: rippleDuration,
          easing: Easing.linear,
          delay: 1000,
        }).start();
      }
    },
    onAnimationEnd = () => {
      if (mounted) {
        setState({...state, ripples: state.ripples.slice(1)});
      }
    },
    startRipple = (event: any) => {
      let {width, height} = state;

      let w2 = 0.5 * width;
      let h2 = 0.5 * height;

      let {locationX, locationY} = rippleCentered
        ? {locationX: w2, locationY: h2}
        : event.nativeEvent;

      let offsetX = Math.abs(w2 - locationX);
      let offsetY = Math.abs(h2 - locationY);

      let R =
        rippleSize > 0
          ? 0.5 * rippleSize
          : Math.sqrt(Math.pow(w2 + offsetX, 2) + Math.pow(h2 + offsetY, 2));

      let ripple: any = {
        unique: unique++,
        progress: new Animated.Value(0),
        locationX,
        locationY,
        R,
      };

      let animation = Animated.timing(ripple.progress, {
        toValue: 1,
        easing: Easing.out(Easing.ease),
        duration: rippleDuration,
        useNativeDriver: true,
      });

      onRippleAnimation(animation, onAnimationEnd);

      setState({ripples: state.ripples.concat(ripple)});
    },
    renderRipple = ({
      unique,
      progress,
      locationX,
      locationY,
      R,
    }: {
      unique?: any;
      progress?: any;
      locationX?: number;
      locationY?: number;
      R?: any;
    }) => {
      let rippleStyle = {
        top: locationY ? locationY - radius : 0,
        [I18nManager.isRTL ? 'right' : 'left']: locationX
          ? locationX - radius
          : 0,
        backgroundColor: rippleColor,

        transform: [
          {
            scale: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5 / radius, R / radius],
            }),
          },
        ],

        opacity: rippleFades
          ? progress.interpolate({
              inputRange: [0, 1],
              outputRange: [rippleOpacity, 0],
            })
          : rippleOpacity,
      };

      return (
        <Animated.View
          pointerEvents="none"
          style={[styles.ripple, rippleStyle]}
          key={unique}
        />
      );
    };

  let touchableProps = {
    delayLongPress,
    delayPressIn,
    delayPressOut,
    disabled,
    hitSlop,
    pressRetentionOffset,
    testID,
    accessible,
    accessibilityHint,
    accessibilityLabel,
    onLayout: onLayoutFunc,
    onPress: onPressFunc,
    onPressIn: onPressInFunc,
    onPressOut: onPressOutFunc,
    buttonRef,
    onLongPress: onLongPressFunc ? onLongPressFunc : undefined,
    ...('web' !== Platform.OS ? {nativeID} : {}),
  };
  return (
    <View ref={buttonRef} pointerEvents="box-none">
      <TouchableWithoutFeedback {...touchableProps}>
        <Animated.View {...props} pointerEvents="box-none">
          {children}
          <Animated.View
            pointerEvents="none"
            style={[
              styles.container,
              {
                borderRadius: rippleContainerBorderRadius,
                backgroundColor: backgroundColorRipple.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    'transparent',
                    Color(rippleColor)
                      .alpha(0.25)
                      .toString(),
                  ],
                }),
              },
            ]}>
            {state.ripples.map(renderRipple)}
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Ripple;