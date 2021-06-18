import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import TelaCadastro from './src/pages/teladelogin';

//PILHA DE NAVEGAÇÃO:
const AppNavigator = createStackNavigator({

  'Login':{
 
    screen: TelaCadastro,
    navigationOptions:{
    title: 'Login'
    }
  }
},
{
 
 headerStyle:{
 backgroundColor: '#6ca2f7',
 borderBottomWith:10,
 borderBottomColor:'#c5c5c5'
 },
 headerTitleStyle:{
 color: '#fff',
 fontSize: 30
 }
})

const AppContainer = createAppContainer(AppNavigator);
 
export default AppContainer;