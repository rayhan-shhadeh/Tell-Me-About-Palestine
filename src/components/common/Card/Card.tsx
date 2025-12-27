import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { Colors, BorderRadius, Spacing, Shadows } from '@/config/theme';

export interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: keyof typeof Spacing;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
  children,
  onPress,
  variant = 'default',
  padding = 'md',
  style,
}) => {
  const cardStyles = [
    styles.card,
    styles[`card_${variant}`] as any,
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        style={cardStyles}
        onPress={onPress}
        activeOpacity={0.8}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.white,
  },
  card_default: {
    ...Shadows.sm,
  },
  card_elevated: {
    ...Shadows.lg,
  },
  card_outlined: {
    borderWidth: 1,
    borderColor: Colors.gray[300],
  },
});

export default Card;
