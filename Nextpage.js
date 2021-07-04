import React from 'react';

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './Nextstyles'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default class Intro extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

   checkCredentials (username, password) {
        if (username=== "admin" && password === "adminpassword") {
         this.props.setPage(3)
        }else {
            console.log(username, password)
        }
    }
    render() {
    return(
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image source={require('./logoman.png')} style={{ width: 70, height:70 }}/>
                <Text style={styles.textWhite}>Sign In</Text>
            </View>
            <View style={styles.username}>
                <Text>Username</Text>
                <View style={styles.enter}>
                    <TextInput placeholder="Enter your username" style={{ width: 200, height:40 }} onChangeText={(text) => this.setState({ username: text })} />
                    <Entypo name="check" size={30}/>
                </View>
            </View>
            <View style={styles.username}>
                <Text style={styles.password} >password</Text>
                <View style={styles.enter}>
                <TextInput
                  placeholder="Enter your password"
                  style={{ width: 200, height:40 }}
                  secureTextEntry={true}
                  onChangeText={(text) => this.setState({ password: text })}
                  />
                    <Entypo name="check" size={30}/>
                </View>
               <View style={styles.forget}>
                    <Text>forgot your password?</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => this.checkCredentials(this.state.username, this.state.password)}>
              <View style={styles.signWrapper}>
                    <Text>Sign In</Text>
               </View>
               </TouchableOpacity>

            <View style={styles.or}><Text>or</Text></View>

            <View style={styles.icons}>
                <TouchableOpacity>
                    <AntDesign name="google" size={30} />
                </TouchableOpacity>
                    <TouchableOpacity>
                    <AntDesign name="facebook-square" size={30} color="#1b0a93"/>
                    </TouchableOpacity>
                <TouchableOpacity>
                <   AntDesign name="twitter" size={30} color="#1b0a93"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="linkedin-square" size={30} color="#1b0a93"/>
                    </TouchableOpacity>
            </View>
            <View style={styles.noAccount}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.create}>  Sign up</Text>
                </TouchableOpacity>
            </View> 

        </View>
    );
}
}