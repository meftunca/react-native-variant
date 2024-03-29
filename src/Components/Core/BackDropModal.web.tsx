import React, {useEffect} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Animated,
  Easing,
} from 'react-native';
import {useAnimation, useDimensions} from '../../Helpers/Hooks';
import usePortal from '../../Helpers/Hooks/usePortal.web';
interface BackDropModalProps {
  visible?: boolean;
  fullScreen?: boolean;
  backdropColor?: string;
  duration?: number;
  delay?: number;
  animationType?: 'fade' | 'slide' | 'none';
  onClose?: () => void | undefined;
  children?: React.ReactNode;
}

const BackDropModal: React.FC<BackDropModalProps> = ({
  onClose,
  children,
  animationType,
  duration = 400,
  delay,
  visible = false,
  fullScreen = false,
  backdropColor = 'transparent',
}) => {
  const windowHeight = useDimensions().window.height;
  const animation = useAnimation({
    type: 'timing',
    toValue: visible ? 1 : 0,
    initialValue: visible ? 1 : 0,
    easing: Easing.ease,
    duration,
    delay,
  });
  const {openPortal, closePortal, isOpen, Portal} = usePortal({});
  useEffect(() => {
    return () => onClose && onClose();
  }, []);

  useEffect(() => {
    console.log('visible', visible);
    if (visible === true) openPortal(true);
    else if (backdropColor === 'transparent') closePortal();
    else
      setTimeout(() => {
        closePortal();
      }, 1200);
  }, [visible]);
  return (
    <Portal>
      <Animated.View
        pointerEvents={visible ? 'auto' : 'none'}
        accessibilityViewIsModal
        accessibilityLiveRegion="polite"
        style={[
          StyleSheet.absoluteFill,
          {
            position: 'fixed',
            display: isOpen ? 'flex' : 'none',
            height: '100%',
          },
        ]}>
        <TouchableWithoutFeedback style={{zIndex: 0}} onPress={onClose}>
          <Animated.View
            style={{
              flex: 1,
              backgroundColor:
                animationType === 'slide' ? 'transparent' : backdropColor,
              opacity: animation,
            }}
          />
        </TouchableWithoutFeedback>
        <Animated.View
          id="Dialog"
          style={StyleSheet.flatten([
            fullScreen === true && {
              backgroundColor: 'white',
              height: '100%',
              flex: 1,
            },
            {
              ...StyleSheet.absoluteFillObject,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              flexGrow: 1,
              flexShrink: 1,
              // backgroundColor: 'red',
              zIndex: 999,
            },
            animationType === 'slide'
              ? {
                  top: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [windowHeight, 0],
                  }),
                }
              : animationType === 'fade'
              ? {
                  opacity: animation,
                }
              : {},
          ])}
          pointerEvents="box-none">
          <KeyboardAvoidingView
            behavior="height"
            style={StyleSheet.flatten([
              fullScreen && {
                height: '100%',
              },
              {
                width: fullScreen ? '100%' : '80%',
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignSelf: 'center',
              },
            ])}>
            {children}
          </KeyboardAvoidingView>
        </Animated.View>
      </Animated.View>
    </Portal>
  );
};

export default BackDropModal;
