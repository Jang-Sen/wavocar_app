import React from 'react';
import { StyleSheet } from 'react-native';

import Block from './Block';
import { theme } from '../../constants';

interface Props {
  color?: string;
  style?: any;
  children?: React.ReactNode;

  [key: string]: any;
}

export default function Card({ color, style, children, ...props }: Props) {
  const cardStyles = [styles.card, style];
  return (
    <Block color={color || theme.colors.white} style={cardStyles} {...props}>
      {children}
    </Block>
  );
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base,
  },
});
