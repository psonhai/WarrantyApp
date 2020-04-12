import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchBar, ListItem, Icon, Input } from 'react-native-elements';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// function HomeScreen({ navigation }) {
class WarrantySearch extends React.Component {
  state = {
    search: '',
    list: [],
  };

  updateSearch = search => {
    this.setState({
      'search': {search},
      'list': [
        {
          title: 'Bom nuoc - BM001 - 25/05/2020',
          icon: 'av-timer'
        },
        {
          title: 'Hoa tien - AM002 - 25/05/2020',
          icon: 'flight-takeoff'
        },
        {
          title: 'Bom nuoc - BM001 - 25/05/2020',
          icon: 'av-timer'
        },
        {
          title: 'Hoa tien - AM002 - 25/05/2020',
          icon: 'flight-takeoff'
        },
        {
          title: 'Bom nuoc - BM001',
          icon: 'av-timer'
        },
        {
          title: 'Hoa tien - AM002',
          icon: 'flight-takeoff'
        },
        {
          title: 'Bom nuoc - BM001',
          icon: 'av-timer'
        },
        {
          title: 'Hoa tien - AM002',
          icon: 'flight-takeoff'
        },
        {
          title: 'Bom nuoc - BM001',
          icon: 'av-timer'
        },
        {
          title: 'Hoa tien - AM002',
          icon: 'flight-takeoff'
        },
      ],
    })
  };

  render() {
    const { search } = this.state
    const { list } = this.state
    

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
        { 
          list.map((item, i) => (
            <ListItem
              onPress={() => this.props.navigation.navigate('WarrantySearchDetail')}
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              bottomDivider
              badge={{ value: "", status: "success"}}
              chevron
            />
          ))
        }
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

function Home({}) {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="WarrantySearch" component={WarrantySearch} />
      <Stack.Screen name="WarrantySearchDetail" component={WarrantySearchDetail} />
    </Stack.Navigator>
  )
};

function WarrantySearchDetail() {
  return (
    <View>
      <Text>Product Name</Text>
      <Text>Product warranty code</Text>
      <Text>Date Buying</Text>
      <Text>Date Start active warranty</Text>
      <Text>Date expire</Text>
      <Text>Status</Text>
      <Text>Note</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  name: "detail"
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
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
