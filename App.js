import { View, Text, SafeAreaView } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import GlobalStyles from "./GlobalStyles";
import Home from "./screens/BuyerHome";
import AppLogin from "./screens/AppLogin";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <Provider store={store}>
        <AppLogin />
      </Provider>
    </SafeAreaView>
  );
}
