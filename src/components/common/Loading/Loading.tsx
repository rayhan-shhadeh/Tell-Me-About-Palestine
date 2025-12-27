import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from '@/config/theme';

export interface LoadingProps {
  message?: string;
  size?: 'small' | 'large';
  color?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  message,
  size = 'large',
  color = Colors.oliveGreen[600],
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background.primary,
  },
  message: {
    marginTop: Spacing.md,
    fontSize: Typography.fontSize.base,
    fontWeight: '400',
    color: Colors.text.secondary,
  } as const,
});

export default Loading;
