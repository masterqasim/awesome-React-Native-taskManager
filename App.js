import React from 'react'
import 'react-native-gesture-handler'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons'
import HomeView from './views/HomeView'
import LoadingView from './views/LoadingView'
import LoginView from './views/LoginView'
import SignUpView from './views/SignUpView'
import PlannerView from './views/PlannerView'
import HeatmapView from './views/HeatmapView'
import ShareView from './views/ShareView'
import AccountView from './views/AccountView'
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyB0yillH0eR8nDipFmf2Pta2GJsr70hmFE",
  authDomain: "taskactivityplanner.firebaseapp.com",
  databaseURL: "https://taskactivityplanner.firebaseio.com",
  projectId: "taskactivityplanner",
  storageBucket: "taskactivityplanner.appspot.com",
  messagingSenderId: "261286098",
  appId: "1:261286098:web:86063334b217b30dfae50b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppTabNaviator = createBottomTabNavigator (
  {
    Home: {
      screen: HomeView,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor}/>
      }
    },
    Planner: {
      screen: PlannerView,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-calendar" size={24} color={tintColor}/>
      }
    },
    Share: {
      screen: ShareView,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-share-alt" size={24} color={tintColor}/>
      }
    },
    Heatmap: {
      screen: HeatmapView,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-stats" size={24} color={tintColor}/>
      }
    },

    Account: {
      screen: AccountView,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-person" size={24} color={tintColor}/>
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#161F3D",
      inactiveTintColor: "#B8BBC4",
      showLabel: false
    }
  }
)

const AuthStack = createStackNavigator({
  Login: LoginView,
  SignUp: SignUpView
})

export default createAppContainer (
  createSwitchNavigator(
    {
      Loading: LoadingView,
      App: AppTabNaviator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)