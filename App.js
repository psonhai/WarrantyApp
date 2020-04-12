import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar, ListItem, Icon, Input } from 'react-native-elements';

// function HomeScreen({ navigation }) {
class HomeScreen extends React.Component {
  state = {
    'search': '',
    'list': [],
  };

  updateSearch = search => {
    this.setState({
      'search': {search},
      // 'list': [
      //   {
      //     title: 'Bom nuoc - BM001 - 25/05/2020',
      //     icon: 'av-timer'
      //   },
      //   {
      //     title: 'Hoa tien - AM002 - 25/05/2020',
      //     icon: 'flight-takeoff'
      //   },
      //   {
      //     title: 'Bom nuoc - BM001 - 25/05/2020',
      //     icon: 'av-timer'
      //   },
      //   {
      //     title: 'Hoa tien - AM002 - 25/05/2020',
      //     icon: 'flight-takeoff'
      //   },
      //   {
      //     title: 'Bom nuoc - BM001',
      //     icon: 'av-timer'
      //   },
      //   {
      //     title: 'Hoa tien - AM002',
      //     icon: 'flight-takeoff'
      //   },
      //   {
      //     title: 'Bom nuoc - BM001',
      //     icon: 'av-timer'
      //   },
      //   {
      //     title: 'Hoa tien - AM002',
      //     icon: 'flight-takeoff'
      //   },
      //   {
      //     title: 'Bom nuoc - BM001',
      //     icon: 'av-timer'
      //   },
      //   {
      //     title: 'Hoa tien - AM002',
      //     icon: 'flight-takeoff'
      //   },
      // ],
    })
  };

  render() {
    const { search } = this.state.search;
    // const { list } = this.state.list

    return (
      <View style={{ flex: 1}}>
        <SearchBar
          placeholder="type here"
          onChangeText={this.updateSearch}
          value={search}
        />
        {/* { 
          renderIf(this.state.status)(
            <View>
              <Text>Buyer Name</Text>
              <Text>Phone Number</Text>
            </View>
          ) 
        } */}
        <ScrollView>
        {/* { 
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              bottomDivider
              badge={{ value: "", status: "success"}}
              chevron
            />
          ))
        } */}
        </ScrollView>
        {/* <Text>Product Name</Text>
        <Text>Product warranty code</Text>
        <Text>Date Buying</Text>
        <Text>Date Start active warranty</Text>
        <Text>Date expire</Text>
        <Text>Status</Text>
        <Text>Note</Text> */}
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    );
  }
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Input
        placeholder='BASIC INPUT'
      />
      <Input
        placeholder='BASIC INPUT'
      />
      <Input
        placeholder='BASIC INPUT'
      />
      <Input
        placeholder='BASIC INPUT'
      />
      <Button title="Submit" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'av-timer'
                : 'av-timer'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'flight-takeoff' : 'flight-takeoff';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default function YourApp() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>
//         Try editing me! 🎉
//       </Text>
//     </View>
//   );
// }
