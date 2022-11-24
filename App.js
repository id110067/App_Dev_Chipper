import { View, Text, SafeAreaView } from "react-native";
import SplashScreen from "./screens/SplashScreen";
import GlobalStyles from "./GlobalStyles";
import Home from "./screens/Home";
import AppLogin from "./screens/AppLogin";

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <AppLogin />
    </SafeAreaView>
  );
}
