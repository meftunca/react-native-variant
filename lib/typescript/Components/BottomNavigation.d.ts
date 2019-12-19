import React from 'react';
interface BottomNavigationProps {
    config?: {
        initialScene?: string;
        labelHidden?: boolean;
        labelDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
        color?: string;
    };
    actions?: Array<{
        label?: string;
        icon?: string;
        color?: string;
        sceneKey?: string;
    }>;
    scenes?: Array<{
        key?: string;
        Scene?: React.ReactNode;
    }>;
    onChangeScene?: (params: {
        sceneKey?: string;
    }) => void | null;
    color?: string;
    secondary?: boolean;
    top?: any;
}
declare const BottomNavigation: React.FC<BottomNavigationProps>;
export default BottomNavigation;