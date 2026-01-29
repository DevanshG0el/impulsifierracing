import React from 'react';

export interface MenuItem {
    label: string;
    link: string;
    ariaLabel?: string;
}

export interface SocialItem {
    label: string;
    link: string;
}

export interface StaggeredMenuProps {
    position?: 'left' | 'right';
    colors?: string[];
    items?: MenuItem[];
    socialItems?: SocialItem[];
    displaySocials?: boolean;
    displayItemNumbering?: boolean;
    className?: string;
    logoUrl?: string;
    menuButtonColor?: string;
    openMenuButtonColor?: string;
    accentColor?: string;
    changeMenuColorOnOpen?: boolean;
    isFixed?: boolean;
    closeOnClickAway?: boolean;
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps>;
export default StaggeredMenu;
