import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from '@/config/constants';

// Screens
import SplashScreen from '@/screens/Splash/SplashScreen';
import HomeScreen from '@/screens/Home/HomeScreen';
import ExploreScreen from '@/screens/Explore/ExploreScreen';
import StoriesScreen from '@/screens/Stories/StoriesScreen';
import GamesScreen from '@/screens/Games/GamesScreen';
import ProgressScreen from '@/screens/Progress/ProgressScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={ROUTES.EXPLORE}
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
        }}
      />
      <Tab.Screen
        name={ROUTES.STORIES}
        component={StoriesScreen}
        options={{
          tabBarLabel: 'Stories',
        }}
      />
      <Tab.Screen
        name={ROUTES.GAMES}
        component={GamesScreen}
        options={{
          tabBarLabel: 'Games',
        }}
      />
      <Tab.Screen
        name={ROUTES.PROGRESS}
        component={ProgressScreen}
        options={{
          tabBarLabel: 'Progress',
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.SPLASH}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={ROUTES.SPLASH} component={SplashScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
