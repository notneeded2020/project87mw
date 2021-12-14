import React from 'react';
import { StyleSheet, Text, View, Image, Platform, SafeAreaView, SafeAreaViewBase} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons"

import * as Font from "expo-font";

export default class PostScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  componentDidMount() {
  }


  render() {
    if (!this.props.route.params) {
           this.props.navigation.navigate("Home");
       }
       else{
    return (
      <View style={styles.container}>
    <SafeAreaView style={styles.droidSafeArea}/>
     <View style={styles.appTitle}>
           <View style={styles.appIcon}>
           <Image
               source={require('../assets/logo.png')}
               style={styles.iconImage}></Image>
           </View>
           <View style={styles.appTitleTextContainer}>
             <Text style={styles.appTitleText}>Spectagram</Text>
           </View>
         </View>
        <View style={styles.postContainer}>
         <ScrollView style={styles.postCard}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image
                source={require('../assets/profile_img.png')}
                style={styles.profileImage}></Image>
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>
                 {this.props.route.params.author}
              </Text>
            </View>
          </View>
          <Image
            source={require('../assets/post.jpeg')}
            style={styles.postImage}
          />
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{this.props.route.params.caption}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
              <Text style={styles.likeText}>12k</Text>
            </View>
          </View>
        
      </ScrollView>
      </View>
      </View>
    );
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
  authorContainer: {
    margin: RFValue(13),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
  profileImage: {
    flex: 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
  },
  likeButton: {
    width: RFValue(165),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  authorNameContainer: {
    paddingLeft: RFValue(0),
    justifyContent: 'center',
    alignItems:"center"
  },
  authorNameText: {
    fontSize: RFValue(18),
    color: 'white',
  },
  captionContainer: {
    paddingLeft: RFValue(0),
    justifyContent: 'center',
    alignItems:"center"
  },
  captionText: {
    fontSize: 13,
    color: 'white',
    paddingTop: RFValue(10),
  },
   likeText: {
    color: 'white',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});