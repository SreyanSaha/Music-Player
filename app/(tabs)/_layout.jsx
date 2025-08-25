import { Tabs } from "expo-router";
// Icons for home 
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
// Icons for search 
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
// Icons for library
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout(){
    return (
        <Tabs initialRouteName="homeScreen" screenOptions={{tabBarInactiveBackgroundColor: "#FF6E00", initialRouteName: "homeScreen"}}>
            <Tabs.Screen name="homeScreen" options={
                {
                    title: "Home", 
                    tabBarIcon: ({focused})=>{
                    return !focused?(<Feather name="home" size={24} color="back" />)
                    :(<Entypo name="home" size={24} color="#FF6E00" />)},
                    tabBarActiveBackgroundColor: "black",
                    tabBarActiveTintColor: "#FF6E00",
                    tabBarInactiveTintColor: "back",
                }
            }/>
            <Tabs.Screen name="searchScreen" options={
                {
                    title: "Search",
                    tabBarIcon: ({focused})=>{
                    return !focused?(<AntDesign name="search1" size={24} color="back" />)
                    :(<FontAwesome name="search" size={24} color="#FF6E00" />)},
                    tabBarActiveBackgroundColor: "black",
                    tabBarActiveTintColor: "#FF6E00",
                    tabBarInactiveTintColor: "back"
                }
            }/>
            <Tabs.Screen name="libraryScreen" options={
                {
                    title: "Library",
                    tabBarIcon: ({focused})=>{
                    return !focused?(<Ionicons name="library-outline" size={24} color="back" />)
                    :(<Ionicons name="library-sharp" size={24} color="#FF6E00" />)},
                    tabBarActiveBackgroundColor: "black",
                    tabBarActiveTintColor: "#FF6E00",
                    tabBarInactiveTintColor: "back"
                }
            }/>
        </Tabs>
    );
}