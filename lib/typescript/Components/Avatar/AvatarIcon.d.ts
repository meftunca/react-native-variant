import React from 'react';
import { StyleProp, ViewStyle, ImageStyle } from 'react-native';
interface AvatarIconProps {
    elevation?: number;
    size?: number;
    style?: StyleProp<ImageStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    padding?: number;
    color?: string;
    icon?: string;
    backgroundColor?: string;
    iconFontFamily?: 'materialCommunity' | 'material' | 'simpleLine' | 'fa' | 'fa5' | 'fa5pro' | 'foundation' | 'evil' | 'octicons' | 'ionic' | 'feather' | 'entypo' | 'zocial';
}
declare const AvatarIcon: React.FC<AvatarIconProps>;
export default AvatarIcon;