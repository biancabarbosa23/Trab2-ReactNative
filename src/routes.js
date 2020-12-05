import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Register from "./pages/Register";
import Alter from "./pages/Alter";
import List from "./pages/List";
import Home from "./pages/Home";

const appNavigation = createStackNavigator({
  home: {
    screen: Home,
  },
  register: {
    screen: Register,
  },
  alter: {
    screen: Alter,
  },
  list: {
    screen: List,
  },
});

const Routes = createAppContainer(appNavigation);
export default Routes;
