import React from "react";
import { StyleSheet, View, Image, Text, Linking, Platform } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

const Profile = (props)=> {
  const {id,name,picture,phone,salary,email,position} = props.route.params.item 

  const openDail=()=>{
        if(Platform.os === "android"){
            Linking.openURL("tel:1234567")
        }else{
            Linking.openURL("telprompt:1234567")
        }
  }
return(
    <View style={styles.root}>
        <LinearGradient
            colors={["#0033ff","#6bc1ff"]}
            style={{height:"20%"}}
        />
        
        <View style={{alignItems:"center"}}>
            <Image
                style={{width:140,height:140,borderRadius:140/2,marginTop:-50}}
                source={{uri:picture}}
            />
        </View>

        <View style={{alignItems:"center"}}>
            <Title>{name}</Title>
            <Text style={{fontSize:15}}>{position}</Text>
        </View>

            <Card style={styles.mycard} onPress={()=>{
                Linking.openURL("mailto:sjww1410@gmail.com")
            }}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="email" size={32} color="green" />
                    <Text style={styles.mytext}>{email}</Text>
                </View>
            </Card>

            <Card style={styles.mycard} onPress={()=>{
                Linking.openURL("mailto:sjww1410@gmail.com")
            }}>
                <View style={styles.cardContent}>
                    <Entypo name="phone" size={32} color="green" />
                    <Text style={styles.mytext}>{phone}</Text>
                </View>
            </Card>

            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name="attach-money" size={32}color="green" />
                    <Text style={styles.mytext}>{salary}</Text>
                </View>
            </Card>
        <View style={{flexDirection:"row",justifyContent:"space-around",padding:10}}>
            <Button 
                icon="account-edit" 
                mode="contained" 
                theme={theme}
                onPress={() => console.log('Pressed')}>
                    編輯
            </Button>

            <Button 
                icon="delete" 
                mode="contained" 
                theme={theme}
                onPress={() => console.log('Pressed')}>
                    刪除員工
            </Button>
        </View>


    </View>
)
}
const theme = {
    colors:{
        primary:"#006aff"
    }
}
const styles = StyleSheet.create({
    root:{
        flex:1
    }, 
    mycard: {
        margin:3
    },
    cardContent:{
        flexDirection:"row",
        padding:8
    },
    mytext:{
        fontSize:18,
        marginTop:3,
        marginLeft:5
    }
})

export default Profile;