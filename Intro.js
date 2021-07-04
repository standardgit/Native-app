import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './introstyles';

export default function Intro(props) {
    console.log(props)
    return(

        <ImageBackground  source={require("./new.png")} style={styles.container}>
           <View style={styles.logoWrapper}>
                <View>
                    <Image source={require('./logoman.png')} style={{ width: 70, height:70 }} />
                </View>
                <View>
                    <Text style={styles.text} >Roomy</Text>
                </View>
                <View>
                    <Text style={styles.newtext}> Find your Roommate Today</Text>    
                </View>   
            </View>
            <View style={styles.start}>
                <TouchableOpacity onPress={() => props.setPage(2)}>
                    <Text style={styles.textWhite}>Start</Text>
                </TouchableOpacity>
            </View>   
        </ImageBackground>
    
             

      

    );
}