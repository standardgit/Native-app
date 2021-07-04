import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './Styles';

export default function Profile(props) {
    console.log(props)
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity>
            <Feather name="settings" color="#fff" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.setPage(1)}>  
            <Feather name="bell" color="#fff" size={30} />
          </TouchableOpacity>  
        </View>
        <View style={styles.userDetails}>
          <Image source={require('./user.png')} style={styles.profileImage} />
          <Text style={styles.name}>My Name</Text>
          <Text style={styles.username}>Username</Text>
        </View>
        <View style={styles.profileCounts}>
          <View style={styles.countWrapper}>
            <Text style={styles.textWhite}>321</Text>
            <Text style={styles.textWhite}>Followers</Text>
          </View>
          <View style={styles.countWrapper}>
            <Text style={styles.textWhite}>321</Text>
            <Text style={styles.textWhite}>Followers</Text>
          </View>
        </View>
      </View>
      <View style={styles.detailSection}>
        <TouchableOpacity style={styles.options}>
          <View style={styles.NewWrapper}>
            <Entypo name="folder-images" size={30} />
            <Text style={styles.text}>  Shots</Text>
          </View >
          <View style={styles.NewWrapper}>
            <Text>100</Text>
            <MaterialIcons name="keyboard-arrow-right" size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
          <View style={styles.NewWrapper}>
            <Entypo name="heart" size={30} />
            <Text style={styles.text}>  Likes</Text>
          </View >
          <View style={styles.NewWrapper}>
            <Text>75</Text>
            <MaterialIcons name="keyboard-arrow-right" size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
          <View style={styles.NewWrapper}>
            <Entypo name="bucket" size={30} />
            <Text style={styles.text}>  Buckets</Text>
          </View >
          <View style={styles.NewWrapper}>
            <Text>2</Text>
            <MaterialIcons name="keyboard-arrow-right" size={30} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
          <View style={styles.NewWrapper}>
            <Entypo name="tag" size={30} />
            <Text style={styles.text}>  Tags</Text>
          </View >
          <View style={styles.NewWrapper}>
            <Text>12</Text>
            <MaterialIcons name="keyboard-arrow-right" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

