import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import AppHome from "./src";

AppRegistry.registerComponent(appName, () => AppHome);