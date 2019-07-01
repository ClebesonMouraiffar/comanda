import PgHome from './pages/PgHome';
import PgCadastros from './pages/PgCadastros';
import PgMesas from "./pages/PgMesas";
import PgGrupos from "./pages/PgGrupos";
import PgItens from "./pages/PgItens";
import FormGrupo from "./pages/FormGrupo";
import FormItem from "./pages/FormItem";
import FormMesa from "./pages/FormMesa";

import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator } from 'react-navigation';

//const Routes = createAppContainer(
//  createStackNavigator({
//    Home: Page1,
//    About: Page2,
//  })
//);

 const AppHome = createAppContainer(
  createMaterialTopTabNavigator({
     Home:createStackNavigator({
      Home: PgHome,
    }),
     Cadastros:createStackNavigator({
      Cadastros: PgCadastros,
      Grupos:PgGrupos,
      Itens:PgItens,
      Mesas:PgMesas,
      FormGrupo: FormGrupo,
      FormItem: FormItem,
      FormMesa: FormMesa,
    })
   })
 );

// const DrawerNavigator = createAppContainer(
//   createDrawerNavigator({
//     Home: Page1,
//     About: Page2,
//   })
// );

export default AppHome;