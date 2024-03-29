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

const Ripple: React.FC<RippleProps> = ({
  disabled = false,
  hitSlop,
  pressRetentionOffset,
  children,
  rippleContainerBorderRadius = 5,
  testID,
  nativeID = Number(Math.random() * 100).toString(),
  accessible = false,
  onPressIn,
  onPressOut,
  delayPressIn = 150,
  delayPressOut = 150,
  delayLongPress = 360,
  accessibilityHint,
  accessibilityLabel,
  onPress,
  onLongPress,
  buttonRef,
  onLayout,
  onRippleAnimation = (animation: any, callback: Function | undefined) =>
    animation.start(callback),
  rippleColor = 'rgb(0, 0, 0)',
  rippleOpacity = 0.4,
  rippleDuration = Platform.OS === 'web' ? 425 : 350,
  rippleSize = 0,
  rippleCentered = false,
  rippleSequential = false,
  rippleFades = true,
  ...props
}) => {
  const [state, setBaseState] = useState({width: 0, height: 0, ripples: []});
  const backgroundColorRipple = useRef(new Animated.Value(0)).current;
  const [mounted, setMounted] = useState(false);
  const setState = (newState: any) => setBaseState({...state, ...newState});
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
      backgroundColorRipple.stopAnimation();
      backgroundColorRipple.removeAllListeners();
      setState({width: 0, height: 0, ripples: []});
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
          backgroundColorRipple.stopAnimation();
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
          delay: rippleDuration * 5,
        }).start();
      } else if ('function' === typeof onPress) {
        Animated.timing(backgroundColorRipple, {
          toValue: 0,
          duration: rippleDuration,
          easing: Easing.linear,
          delay: rippleDuration * 5,
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
        unique: Date.now() * Math.random(),
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
    <View ref={buttonRef}>
      <TouchableWithoutFeedback accessibilityRole="button" {...touchableProps}>
        <View {...props}>
          {children}
          <Animated.View
            style={[
              styles.container,
              {
                borderRadius: rippleContainerBorderRadius,
                backgroundColor: backgroundColorRipple.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    'transparent',
                    Color(rippleColor)
                      .alpha(0.15)
                      .toString(),
                  ],
                }),
              },
            ]}>
            {state.ripples.map(renderRipple)}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Ripple;
