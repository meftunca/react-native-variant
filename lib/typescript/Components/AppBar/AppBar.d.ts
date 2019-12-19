import React from 'react';
import { ViewProps } from 'react-native';
import { AppBarContentProps } from './Content';
import { IconButtonProps } from 'Components/Buttons/IconButton';
interface AppBarProps extends ViewProps {
    subChildren?: any | React.ReactNode;
    subChildrenProps?: any;
    color?: string;
    elevation?: number;
}
interface CompoundProps {
    Content: React.FC<AppBarContentProps>;
    Grow: React.FC;
    Action: React.FC<IconButtonProps>;
}
declare const AppBar: React.FC<AppBarProps> & CompoundProps;
export default AppBar;