import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { theme } from '../../constants';

interface Props extends TouchableOpacityProps {
  opacity?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export default function Button({
  style,
  opacity,
  color,
  children,
  ...rest
}: Props) {
  const buttonStyles = [
    styles.button,
    color && styles[color as keyof typeof styles],
    color &&
      !styles[color as keyof typeof styles] && { backgroundColor: color },
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={opacity || 0.8}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.sizes.radius,
    height: theme.sizes.base * 3,
    justifyContent: 'center',
    marginVertical: theme.sizes.margin,
  },
  accent: { backgroundColor: theme.colors.accent },
  primary: { backgroundColor: theme.colors.primary },
  secondary: { backgroundColor: theme.colors.secondary },
  tertiary: { backgroundColor: theme.colors.tertiary },
  black: { backgroundColor: theme.colors.black },
  white: { backgroundColor: theme.colors.white },
  gray: { backgroundColor: theme.colors.gray },
  gray2: { backgroundColor: theme.colors.gray2 },
});
