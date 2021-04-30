import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from 'react-native-paper';

const Home = (props) => {
    const data = [
        {id:"1", name:"張小美",email:"abc@gmail.com",salary:"5 lpa",phone:"123",position:"web dev",picture:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},
        {id:"2", name:"小忠忠",email:"abc00@gmail.com",salary:"10 lpa",phone:"456",position:"app dev",picture:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},
        {id:"3", name:"李大同",email:"abc12@gmail.com",salary:"9 lpa",phone:"789",position:"picture dev",picture:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},
        {id:"4", name:"老公公",email:"abc96@gmail.com",salary:"8 lpa",phone:"1230",position:"write dev",picture:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
        ]
        
    const renderList = ((item)=>{
        return (
                    
            <Card style={styles.mycard}
             onPress={() => navigation.navigate("Profile",{item})} >
                                             
                <View style={styles.cardView}>
                    <Image
                    style={{ width: 60, height: 60, borderRadius: 30 }}
                    source={{
                        uri:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    }}
                    />
                    <View style={{marginLeft:10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text >{item.postion}</Text>
                    </View>
                </View>
              
            </Card>
        )
    })
  return (
    <View style={{flex:1}}>
      {/* <Card style={styles.mycard}>
        <View style={styles.cardView}>
            <Image
            style={{ width: 60, height: 60, borderRadius: 30 }}
            source={{
                uri:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            }}
            />
            <View style={{marginLeft:10}}>
                <Text style={styles.text}> app!中文</Text>
                <Text > web design</Text>
            </View>
        </View>
      </Card> */}

      <FlatList 
      data = {data}
      renderItem = {({item})=>{
        return renderList(item)
        }}
        keyExtractor = {item=>item.id}
      />
        <FAB onPress={()=>navigation.navigate("Create")}
              style={styles.fab}
              small={false}
              icon="plus"
              theme={{colors:{accent:"#006aff"}}}
        />

    </View>
  );
};

const styles = StyleSheet.create({
  mycard: {
    margin: 5,
    padding: 5,
  },
  cardView:{
      flexDirection:"row",
      padding:6
  },
  text:{
      fontSize:18,
  }, 
  fab:{
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
  }
});
export default Home;
