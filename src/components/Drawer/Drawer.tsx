import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DrawerProps } from './Drawer.type';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useAWVRETheme } from '../AWVREProvider';

export const Drawer = (props: DrawerProps) => {
  const {
    children,
    anchor = 'right',
    open,
    onClose,
    className,
    style,
    overlayStyle,
    ...other
  } = props;

  const { theme, mode } = useAWVRETheme();

  let height,
    width = '100%';
  let borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius: string | number = '0px';
  if (anchor === 'top' || anchor === 'bottom') {
    height = open ? '60%' : '0%';
    if (anchor === 'top') {
      borderBottomLeftRadius = theme.borderRadius.lg;
      borderBottomRightRadius = theme.borderRadius.lg;
    } else {
      borderTopLeftRadius = theme.borderRadius.lg;
      borderTopRightRadius = theme.borderRadius.lg;
    }
  } else {
    height = '100%';
  }

  if (anchor === 'left' || anchor === 'right') {
    width = open ? '80%' : '0%';
    if (anchor === 'left') {
      borderTopRightRadius = theme.borderRadius.lg;
      borderBottomRightRadius = theme.borderRadius.lg;
    } else {
      borderTopLeftRadius = theme.borderRadius.lg;
      borderBottomLeftRadius = theme.borderRadius.lg;
    }
  } else {
    width = '100%';
  }

  return (
    <div
      className={`awvre-drawer`}
      style={{
        backgroundColor: open ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',
        transition: 'all 0.3s ease-in-out',
        ...overlayStyle,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        visibility: open ? 'visible' : 'hidden',
      }}
    >
      <div
        {...other}
        className={`drawer-content ${className ?? ''}`}
        style={{
          transition: 'all 0.3s ease-in-out',
          backgroundColor: mode === 'dark' ? theme.colors.background : 'white',
          padding: theme.spacing.lg,
          ...style,
          position: 'fixed',
          top: anchor === 'top' ? 0 : 'auto',
          bottom: anchor === 'bottom' ? 0 : 'auto',
          left: anchor === 'left' ? 0 : 'auto',
          right: anchor === 'right' ? 0 : 'auto',
          overflowX: 'hidden',
          overflowY: 'hidden',
          height,
          width,
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomLeftRadius,
          borderBottomRightRadius,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: theme.spacing.lg,
            width: '100%',
          }}
        >
          <FontAwesomeIcon
            icon={fas.faClose}
            className="fa-solid fa-xl"
            onClick={onClose}
            color={theme.colors.font}
          />
        </div>
        {children}
      </div>
    </div>
  );
};
