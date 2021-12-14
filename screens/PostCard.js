import React from 'react';
import { StyleSheet, Text, View, Image, Platform, SafeAreaView, SafeAreaViewBase, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons"

export default class PostCard extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
      light_theme: true
     };
   }

   fetchUser = () => {
    let theme;
    firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", snapshot => {
        theme = snapshot.val().current_theme;
        this.setState({ light_theme: theme === "light" });
      });
  };
 
   componentDidMount() {
      this.fetchUser()
   }
   render() {
     return (
      <TouchableOpacity
      style={styles.container}
      onPress={() =>
        this.props.navigation.navigate(
          'Post Screen',
          {post : this.props.post}
        )
      }>
      <SafeAreaView style={styles.droidSafeArea}/>
       <View style={styles.container}>
         <View style={this.state.light_theme
                ? styles.cardContainerLight
                : styles.cardContainer}>
           <View style={styles.authorContainer}>
             <View style={styles.authorImageContainer}>
               <Image
                 source={require('../assets/profile_img.png')}
                 style={styles.profileImage}></Image>
             </View>
             <View style={styles.authorNameContainer}>
               <Text style={this.state.light_theme
                ? styles.authorNameTextLight
                : styles.authorNameText}>
                 {this.props.post.author}
               </Text>
             </View>
           </View>
           <Image
             source={require('../assets/post.jpeg')}
             style={styles.postImage}
           />
           <View style={styles.captionContainer}>
             <Text style={this.state.light_theme
                ? styles.captionTextLight
                : styles.captionText}>{this.props.post.captions}</Text>
           </View>
           <View style={styles.actionContainer}>
             <View style={styles.likeButton}>
               <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
               <Text style={styles.this.state.light_theme
                ? styles.likeTextLight
                : styles.likeText}>12k</Text>
             </View>
           </View>
         </View>
       </View>
       </TouchableOpacity>
     );
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
   cardContainerLight: {
    margin: RFValue(13),
    backgroundColor: 'white',
    borderRadius: RFValue(20),
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: RFValue(0.5),
    shadowRadius: RFValue(5),
    elevation: RFValue(2),
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
   authorNameTextLight: {
    fontSize: RFValue(18),
    color: 'black',
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
   captionTextLight: {
    fontSize: 13,
    color: 'black',
    paddingTop: RFValue(10),
  },
    likeText: {
     color: 'white',
     fontSize: RFValue(25),
     marginLeft: RFValue(5),
   },
   likeTextLight: {
    color: 'black',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
 });