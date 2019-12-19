import React from 'react';
import Ripple, {RippleProps} from './../Core/Ripple';
import Text, {TextProps} from './../Core/Typography';
import Surface, {SurfaceProps} from './../Core/Surface';
import {ViewStyle, StyleProp, PixelRatio, View, ViewProps} from 'react-native';
import Icon, {IconFontFamily} from '../Core/Icon';
import Color from 'color';
import {useTheme} from 'Theming';

export interface ButtonProps extends RippleProps {
  iconFontFamily?: IconFontFamily;
  variant?: 'text' | 'outlined' | 'contained';
  type?: 'button' | 'drawer' | 'dialog';
  role?: 'fab' | 'icon' | 'button';
  paperProps?: SurfaceProps;
  color?: string;
  radius?: number;
  size?: number;
  dense?: boolean;
  fullWidth?: boolean;
  onLayout?: any; // bu kısımı sonrada düzenle
  textProps?: TextProps;
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  icon?: string;
  theme?: object;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  rippleStyle?: StyleProp<ViewStyle>;
  buttonRef?: any;
}
const Button: React.FC<ButtonProps> = ({
  variant = 'text',
  children,
  radius = 4,
  paperProps = {padding: [0, 8], margin: 2},
  color,
  role = 'button',
  style,
  size = 20,
  type = 'button',
  dense = false,
  fullWidth = false,
  iconFontFamily,
  rippleStyle,
  onLayout,
  buttonRef,
  theme,
  contentContainerStyle,
  icon,
  textProps,
  transform = 'capitalize',
  ...props
}) => {
  const themeControl = useTheme(theme);
  const isDefaultButton: boolean = role === 'button';
  const textColor: any =
    !color && role === 'button'
      ? themeControl.color.primary
      : role !== 'button'
      ? themeControl.color.text
      : Color(color).isDark()
      ? variant === 'contained'
        ? 'white'
        : color
      : color;
  const iconStyles = {
    marginRight: 8,
  };
  return (
    <Ripple
      // rippleFades
      // rippleSequential
      // rippleCentered
      rippleOpacity={Color(textColor).isDark() ? 0.4 : undefined}
      {...props}
      style={[
        rippleStyle,
        {
          margin: 4,
          borderRadius: !isDefaultButton
            ? dense
              ? size - 4
              : size + 4
            : radius,
          overflow: 'hidden',
        },
        buttonStyleGenerator(
          isDefaultButton ? variant : role === 'fab' ? 'contained' : 'text',
          textColor,
          type,
        ),
      ]}
      rippleDuration={300}
      rippleColor={
        Color(textColor).isDark()
          ? Color(textColor)
              .lighten(0.2)
              .toString()
          : Color(textColor)
              .darken(0.2)
              .toString()
      }>
      <View
        ref={buttonRef}
        onLayout={onLayout}
        style={[
          {
            borderRadius: !isDefaultButton
              ? dense
                ? size - 4
                : size + 4
              : radius,
            overflow: 'hidden',
          },
          contentContainerStyle,
          !isDefaultButton && fullWidth === false
            ? {alignSelf: 'flex-start'}
            : {},
        ]}>
        <Surface
          {...paperProps}
          direction="row"
          justify={type === 'drawer' ? 'flex-start' : 'center'}
          alignItems="center"
          alignContent="center"
          margin={[2, 16]}
          padding={0}
          style={[
            style,
            {
              backgroundColor: 'transparent',
              borderRadius: !isDefaultButton
                ? dense
                  ? size - 4
                  : size + 4
                : radius,
              minHeight: 36,
              // minWidth: 64,
            },
          ]}>
          {icon !== undefined && (
            <Icon
              name={icon}
              color={
                type === 'button' && variant === 'contained'
                  ? Color(textColor).isDark()
                    ? 'white'
                    : textColor
                  : textColor
              }
              family={iconFontFamily}
              size={size - (dense ? 4 : 0)}
              style={iconStyles}
            />
          )}
          {role === 'button' && (
            <>
              {typeof children === 'string' ? (
                <Text
                  dense={dense}
                  style={{
                    textTransform: transform,
                    textAlign: 'center',
                  }}
                  variant="button"
                  {...textProps}
                  contrast={0}
                  color={
                    type === 'button' && variant === 'contained'
                      ? Color(textColor).isDark()
                        ? 'white'
                        : textColor
                      : textColor
                  }>
                  {children}
                </Text>
              ) : (
                children
              )}
            </>
          )}
        </Surface>
      </View>
    </Ripple>
  );
};

const buttonStyleGenerator = (variant: string, color: string, type: string) => {
  let style: any = {};
  switch (variant) {
    case 'text':
      style['backgroundColor'] = 'transparent';
      style['elevation'] = 0;
      style['shadowOpacity'] = 0;
      break;
    case 'outlined':
      style['borderWidth'] = 1;
      style['borderColor'] = Color(color)
        .alpha(0.5)
        .toString();
      style['backgroundColor'] = 'transparent';
      style['elevation'] = 0;
      style['shadowOpacity'] = 0;
      break;
    case 'contained':
      style['backgroundColor'] = color;
      break;

    default:
      break;
  }
  return style;
};

export default Button;
