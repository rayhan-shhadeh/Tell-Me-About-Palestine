import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@/components/common';
import { Colors, Typography, Spacing } from '@/config/theme';

const HomeScreen = () => {
  const { t } = useTranslation('home');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('app.name')}</Text>
          <Text style={styles.greeting}>{t('greeting.morning')}</Text>
        </View>

        <View>
          <Card style={styles.card} onPress={() => {}}>
            <Text style={styles.cardTitle}>{t('sections.explore.title')}</Text>
            <Text style={styles.cardDescription}>
              {t('sections.explore.description')}
            </Text>
          </Card>

          <Card style={[styles.card, styles.cardSpacing]} onPress={() => {}}>
            <Text style={styles.cardTitle}>{t('sections.stories.title')}</Text>
            <Text style={styles.cardDescription}>
              {t('sections.stories.description')}
            </Text>
          </Card>

          <Card style={[styles.card, styles.cardSpacing]} onPress={() => {}}>
            <Text style={styles.cardTitle}>{t('sections.games.title')}</Text>
            <Text style={styles.cardDescription}>
              {t('sections.games.description')}
            </Text>
          </Card>

          <Card style={[styles.card, styles.cardSpacing]} onPress={() => {}}>
            <Text style={styles.cardTitle}>{t('sections.facts.title')}</Text>
            <Text style={styles.cardDescription}>
              {t('sections.facts.description')}
            </Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  scrollContent: {
    padding: Spacing.md,
  },
  header: {
    marginBottom: Spacing.lg,
  },
  title: {
    fontSize: Typography.fontSize['3xl'],
    fontWeight: '700',
    color: Colors.oliveGreen[700],
    marginBottom: Spacing.xs,
  },
  greeting: {
    fontSize: Typography.fontSize.lg,
    fontWeight: '400',
    color: Colors.text.secondary,
  },
  card: {
    padding: Spacing.lg,
  },
  cardSpacing: {
    marginTop: Spacing.md,
  },
  cardTitle: {
    fontSize: Typography.fontSize.xl,
    fontWeight: '700',
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
  },
  cardDescription: {
    fontSize: Typography.fontSize.base,
    fontWeight: '400',
    color: Colors.text.secondary,
  },
});

export default HomeScreen;
