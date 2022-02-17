import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import PeopleePage from './SRC/pages/PeopleePage';
import PeopleeDetailPage from './SRC/pages/PeopleeDetailPage';

import { capitalizeFirstLetter } from './SRC/util';

  const Appnavigator = createStackNavigator({
    'Main': {
       screen: PeopleePage
    },
   
  'PeopleeDetail': {
    screen: PeopleeDetailPage,
    navigationOptions: ({ navigation }) =>{
      const peopleeName = capitalizeFirstLetter(
        navigation.state.params.peoplee.name.first
        );
            
      return({
        title: peopleeName,
        headerTitleStyle:{
          color: 'white',
          fontSize: 30,
          flexGrow: 1,
           
        }
      });
    }
  } 
    

}, {
    defaultNavigationOptions: { 
      title: 'Pessoas!',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5',
      },
      headerTitleStyle:{
        color: 'white',
        fontSize: 30,
        flexGrow: 1,
        textAlign: 'center',

      }
    }
});

const AppContainer = createAppContainer(Appnavigator);
 
export default AppContainer;