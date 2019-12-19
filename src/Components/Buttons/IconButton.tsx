import React from 'react';
import Ripple, {RippleProps} from './../Core/Ripple';
import Surface, {SurfaceProps} from './../Core/Surface';
import {ViewStyle, StyleProp, View} from 'react-native';
import Icon, {IconFontFamily} from '../Core/Icon';
import Color from 'color';
import {useTheme} from 'Theming';

export interface IconButtonProps extends RippleProps {
  iconFontFamily?: IconFontFamily;
  role?: 'icon' | 'chip';
  paperProps?: SurfaceProps;
  color?: // | string
  string | ('primary' | 'secondary' | 'accent' | 'error' | 'warning' | 'text');
  backgroundColor?: string;
  size?: number;
  onLayout?: any; // bu kısımı sonrada düzenle
  icon?: string;
  theme?: object;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  rippleStyle?: StyleProp<ViewStyle>;
}
const IconButton: React.FC<IconButtonProps> = ({
  children,
  paperProps = {padding: [4, 8], margin: 2},
  color = 'primary',
  role = 'button',
  style,
  size = 24,
  iconFontFamily,
  backgroundColor,
  rippleStyle,
  onLayout,
  theme,
  containerStyle,
  icon,
  ...props
}) => {
  const themeControl: any = useTheme(theme);
  const textColor: string =
    color && color in themeControl.color
      ? themeControl.color[color]
      : color
      ? color
      : themeControl.color.text;

  return (
    <View
      onLayout={onLayout}
      // pointerEvents="box-none"
      style={[
        {
          alignSelf: 'flex-start',
          borderRadius: size * 2,
          overflow: 'hidden',
          //   minHeight: dense ? 32 : 60,
          //   minWidth: dense ? 32 : 60,
        },
        containerStyle,
      ]}>
      <Ripple
        {...props}
        rippleContainerBorderRadius={size}
        style={[
          rippleStyle,
          {
            borderRadius: size,
            overflow: 'hidden',
            padding: role === 'chip' ? 0 : 4,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          },
        ]}
        rippleColor={textColor}>
        <Surface
          {...paperProps}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          padding={0}
          margin={0}
          style={[
            style,
            {
              backgroundColor: backgroundColor || 'transparent',
              borderRadius: size * 2,
              height: role === 'chip' ? size : size * 1.25,
              width: role === 'chip' ? size : size * 1.25,
              // margin: 0,
              // padding: 0,
            },
          ]}>
          {icon !== undefined && (
            <Icon
              name={icon}
              color={textColor}
              family={iconFontFamily}
              size={size}
            />
          )}
        </Surface>
      </Ripple>
    </View>
  );
};

export default IconButton;