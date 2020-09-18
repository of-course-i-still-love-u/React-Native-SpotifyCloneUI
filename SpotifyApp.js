import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import SpotifyHome from './SpotifyHome'


export default class SpotifyApp extends Component {




    render() {
        return (



            <View style={styles.container}>

                <SpotifyHome />



                <View style={styles.bottom}>

                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('./img/home.png')} style={{ height: 30, width: 30 }} />
                            <Text style={styles.text}>Home</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('./img/search.png')} style={{ height: 30, width: 30 }} />
                            <Text style={styles.text}>Search</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>

                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('./img/star.png')} style={{ height: 30, width: 30 }} />
                            <Text style={styles.text}>Your Library</Text>
                        </View>
                    </TouchableWithoutFeedback>


                </View>
            </View>






        )
    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: "#121212"


    },
    bottom: {

        flexDirection: 'row',
        height: 70,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0,
        backgroundColor: "#272727"
    },
    text: {
        color: "#fff",
        fontFamily: "cursive",
        fontSize: 10,
        marginTop: 5
    }

})