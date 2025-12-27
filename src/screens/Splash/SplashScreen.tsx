import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors, Typography, Spacing } from "@/config/theme";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to main tabs after 2 seconds
    const timer = setTimeout(() => {
      navigation.navigate("MainTabs" as never);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>احكيلي عن فلسطين</Text>
      <Text style={styles.subtitle}>Tell Me About Palestine</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background.tertiary,
  },
  title: {
    fontSize: Typography.fontSize["4xl"],
    fontWeight: "700",
    color: Colors.oliveGreen[700],
    marginBottom: Spacing.sm,
    textAlign: "center",
  } as const,
  subtitle: {
    fontSize: Typography.fontSize.xl,
    fontWeight: "600",
    color: Colors.skyBlue[600],
    textAlign: "center",
  } as const,
});

export default SplashScreen;
