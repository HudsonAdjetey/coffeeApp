import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import Page from "./homePage";
import CartPage from "./Cart";
import FavoritePage from "./Favorite";
import OrderHistoryPage from "./OrderHistory";
import Ionic from "react-native-vector-icons/Ionicons";
import Color from "../../constants/Color";
const Tab = createMaterialBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneAnimationEnabled
      backBehavior="order"
      barStyle={{ backgroundColor: "rgba(12, 15, 20, 0.1)" }}
      activeIndicatorStyle={{ backgroundColor: "transparent" }}
      labeled={false}
      activeColor={Color.secondary}
      inactiveColor="#4E5053"
    >
      <Tab.Screen
        name="Home"
        component={Page}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionic name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionic name="cart" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritePage}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionic name="heart" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderHistoryPage}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionic name="notifications" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
