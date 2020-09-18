import React, { Component } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
const albumData = require('./albumData.json')

export default class SpotifyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {

      data: albumData
      
    };
  }






  render() {
    return (

      <ScrollView>


        <View style={{ flex: 1, backgroundColor: "#121212" }}>
          <Text style={{ fontSize: 30, fontFamily: "cursive", color: '#fff', marginVertical: 25 }}> Good afternoom </Text>
          <View style={{ height: 60, marginTop: 5, flexDirection: "row", justifyContent: "space-around", width: undefined, marginHorizontal: 10 }}>
            <View style={{ flex: 1, backgroundColor: "#2A2B2B", height: 60, width: undefined, borderRadius: 7, marginRight: 10, marginBottom: 5, flexDirection: "row", alignItems: "center" }}>

              <Image source={require('./img/1000150.png')} style={{ height: 60, width: 60, borderTopLeftRadius: 7, borderBottomLeftRadius: 7 }} resizeMode='cover' />
              <Text style={{ fontFamily: "cursive", fontSize: 15, marginLeft: 15, color: '#fff' }} >Daily Mix 4</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "#2A2B2B", height: 60, width: undefined, borderRadius: 7, marginRight: 10, marginBottom: 5, flexDirection: "row", alignItems: "center" }}>

              <Image source={require('./img/5sos150.png')} style={{ height: 60, width: 60, borderTopLeftRadius: 7, borderBottomLeftRadius: 7 }} resizeMode='cover' />
              <Text style={{ fontFamily: "cursive", fontSize: 15, marginLeft: 15, color: '#fff' }} >Daily Mix 5</Text>
            </View>
          </View >
          <View style={{ height: 60, marginTop: 5, flexDirection: "row", justifyContent: "space-around", width: undefined, marginHorizontal: 10 }}>
            <View style={{ flex: 1, backgroundColor: "#2A2B2B", height: 60, width: undefined, borderRadius: 7, marginRight: 10, marginBottom: 5, flexDirection: "row", alignItems: "center" }}>

              <Image source={require('./img/havana150.png')} style={{ height: 60, width: 60, borderTopLeftRadius: 7, borderBottomLeftRadius: 7 }} resizeMode='cover' />
              <Text style={{ fontFamily: "cursive", fontSize: 15, marginLeft: 15, color: '#fff' }} >Camila Cabello</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "#2A2B2B", height: 60, width: undefined, borderRadius: 7, marginRight: 10, marginBottom: 5, flexDirection: "row", alignItems: "center" }}>

              <Image source={require('./img/6months.png')} style={{ height: 60, width: 60, borderTopLeftRadius: 7, borderBottomLeftRadius: 7 }} resizeMode='cover' />
              <Text style={{ fontFamily: "cursive", fontSize: 15, marginLeft: 15, color: '#fff' }} >John K</Text>
            </View>
          </View >
          <View style={{ height: 60, marginTop: 5, flexDirection: "row", justifyContent: "space-around", width: undefined, marginHorizontal: 10 }}>
            <View style={{ flex: 1, backgroundColor: "#2A2B2B", height: 60, width: undefined, borderRadius: 7, marginRight: 10, marginBottom: 5, flexDirection: "row", alignItems: "center" }}>

              <Image source={require('./img/maayuU150.png')} style={{ height: 60, width: 60, borderTopLeftRadius: 7, borderBottomLeftRadius: 7 }} resizeMode='cover' />
              <Text style={{ fontFamily: "cursive", fontSize: 15, marginLeft: 15, color: '#fff' }} >Maaya Uchida</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "#2A2B2B", height: 60, width: undefined, borderRadius: 7, marginRight: 10, marginBottom: 5, flexDirection: "row", alignItems: "center" }}>

              <Image source={require('./img/theweeknd150.png')} style={{ height: 60, width: 60, borderTopLeftRadius: 7, borderBottomLeftRadius: 7 }} resizeMode='cover' />
              <Text style={{ fontFamily: "cursive", fontSize: 15, marginLeft: 15, color: '#fff' }} >The weeknd</Text>
            </View>
          </View >
          <Text style={{ fontSize: 30, fontFamily: "cursive", color: '#fff', marginVertical: 25 }}> Recently played </Text>

          <View style={{ height: 160, width: undefined, marginBottom: 30 }}>
            <FlatList data={this.state.data.Lisa}
              renderItem={({ item }) =>
                <View style={{ marginHorizontal: 10 }}>

                  <Image source={{ uri: item.url }} style={{ height: 120, width: 120 }} resizeMode='cover' />
                  <Text style={{ fontFamily: "cursive", fontSize: 15, color: '#fff', marginTop: 5 }}>
                    {`${item.name} \n${item.year}`}
                  </Text>
                </View>
              }
              keyExtractor={(item, index) =>
                index.toString()
              }
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{ height: 60, width: undefined, marginHorizontal: 10, flexDirection: 'row' }}>
            <Image source={require('./img/theweeken2150.png')} style={{ height: 50, width: 50, borderRadius: 50 / 2 }} resizeMode='cover' />
            <Text style={{ fontFamily: "cursive", fontSize: 10, color: '#e5e5e5', marginLeft: 15 }} >FOR FANS OF</Text>
            <Text style={{ fontFamily: "cursive", fontSize: 20, color: '#fff', marginLeft: -50, marginTop: -10 }} >{`\nTHE Weeknd`}</Text>
          </View>
          
          <View style={{ height: 160, width: undefined, marginVertical:20 }}>
            <FlatList data={this.state.data.theWeeknd}
              renderItem={({ item }) =>
                <View style={{ marginHorizontal: 10 }}>

                  <Image source={{ uri: item.url }} style={{ height: 120, width: 120 }} resizeMode='cover' />
                  <Text style={{ fontFamily: "cursive", fontSize: 15, color: '#fff', marginTop: 5 }}>
                    {`${item.name}`}
                  </Text>
                </View>
              }
              keyExtractor={(item, index) =>
                index.toString()
              }
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <Text style={{ fontSize: 30, fontFamily: "cursive", color: '#fff', marginVertical: 25 }}> Jump back in</Text>
          <View style={{ height: 160, width: undefined, marginBottom: 30 }}>
            <FlatList data={this.state.data.Jumpback}
              renderItem={({ item }) =>
                <View style={{ marginHorizontal: 10 }}>

                  <Image source={{ uri: item.url }} style={{ height: 120, width: 120 }} resizeMode='cover' />
                  <Text style={{ fontFamily: "cursive", fontSize: 15, color: '#fff', marginTop: 5 }}>
                    {`${item.name} \n${item.title}`}
                  </Text>
                </View>
              }
              keyExtractor={(item, index) =>
                index.toString()
              }
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <Text style={{ fontSize: 30, fontFamily: "cursive", color: '#fff', marginVertical: 25 }}> Your favorite artists</Text>
          <View style={{ height: 160, width: undefined, marginBottom: 100 }}>
            <FlatList data={this.state.data.FavoriteArtists}
              renderItem={({ item }) =>
                <View style={{ marginHorizontal: 10,alignItems:"center" }}>

                  <Image source={{ uri: item.url }} style={{ height: 120, width: 120,borderRadius:120/2 }} resizeMode='cover' />
                  <Text style={{ fontFamily: "cursive", fontSize: 15, color: '#fff', marginTop: 5 }}>
                    {`${item.name} `}
                  </Text>
                </View>
              }
              keyExtractor={(item, index) =>
                index.toString()
              }
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

        </View >

      </ScrollView>
    );
  }
}




{/* backgroundColor:'rgba(218,47,104,0.5)' */ }