import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Task1 from '../screens/Task1';
import Task2 from '../screens/Task2';
import Task3 from '../screens/Task3';
import Task4 from '../screens/Task4';
import UserDetails from '../screens/UserDetails';

import Home from '../screens/Home';

const screens={

    Home:{ 
        screen : Home,
    },
    Task1:{
        screen : Task1,
    },
    Task2:{
        screen : Task2
    },
    Task3:{
        screen : Task3
    },
    Task4:{
        screen: Task4
    },
    UserDetails:{
        screen: UserDetails
    },
  

}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);