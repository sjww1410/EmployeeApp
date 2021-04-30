import React, {useState} from "react";
import { StyleSheet, Text, View, Modal,Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const CreateEmployee = ()=>{
    const [Name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [picture, setPicture] = useState("")
    const [modal, setModal] = useState(false)
    
const pickFromGallery  = async()=>{
        const {granted} = await Permissions.askAsync(permissions.CAMERA_ROLL)
        if(granted){
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            if(!data.cancelled){
                let newfile = {
                uri:data.uri,
                type:'test/${data.uri.split(".")[1]}',
                name:'test.${data.uri.split(".")[1]}'
                }
                
                handleUpload(newfile) 
            }
        }else{
            Alert.alert("uou need ti give up permission to work")
        }
    }

    const pickFromCamera  = async()=>{
        const {granted} = await Permissions.askAsync(permissions.CAMERA)
        if(granted){
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes:ImagePicker.MediaTypeOptions.Images,
                allowsEditing:true,
                aspect:[1,1],
                quality:0.5
            })
            if(!data.cancelled){
                let newfile = {
                uri:data.uri,
                type:'test/${data.uri.split(".")[1]}',
                name:'test.${data.uri.split(".")[1]}'
                }

                handleUpload(newfile) 
            }
        }else{
            Alert.alert("uou need ti give up permission to work")
        }
    }
    
    const handleUpload(newfile) = (image)=> {
        const data = new FormData()
        data.append('file',image)
        data.append('upload_preset','employeeApp')
        data.append("cloud_name","mukeshph66")

        fetch("https://api.cloudinary.com/v1_1/mukeshph66/image/upload"),{
            method:"post",
            body:data
        }).then(res=>res.json()).
        then(data=>{
            setPicture(data.url)
        })
    }
    
    return(
            <View style={styles.root}>
                <TextInput
                    label='Name'
                    style={styles.inputStyle}
                    value={Name}
                    theme={theme}
                    model="outlined"
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    label='Email'
                    style={styles.inputStyle}
                    value={email}
                    theme={theme}
                    model="outlined"
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    label='Phone'
                    style={styles.inputStyle}
                    value={phone}
                    theme={theme}
                    keyboardType="nember-pad"
                    model="outlined"
                    onChangeText={text => setPhone(text)}
                />
                <TextInput
                    label='Salary'
                    style={styles.inputStyle}
                    value={salary}
                    theme={theme}
                    model="outlined"
                    onChangeText={text => setSalary(text)}
                />
                <Button 
                    style={styles.inputStyle} 
                    icon="upload" 
                    mode="contained"
                    theme={theme} 
                    onPress={() => setModal(true)}>
                    UPLOAD IMAGE
                </Button>
                
                <Button 
                    style={styles.inputStyle} 
                    icon="ucontent-save" 
                    mode="contained"
                    theme={theme} 
                    onPress={() => console.log("saved")}>
                    save
                </Button>

                <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={modal}
                    onRequestClose={()=>{
                        setModal(false)
                    }}
                >
                    <View style={styles.modalView}>
                        <View style={styles.modalButtonView}>
                            <Button icon="camera"
                                theme={theme} 
                                mode="contained" 
                                onPress={() => pickFromCamera()}>
                                    camera
                            </Button>

                            <Button icon="image-area" 
                                mode="contained" 
                                theme={theme} 
                                onPress={() => pickFromGallery()}>
                                    gallery
                            </Button>
                        </View>
                    
                        <Button  onPress={() => setModal(false)}>
                                cancel
                        </Button>
                    </View>
                </Modal>
            </View>
    )
}
const theme = {
    colors:{
        primary:"#006aff"
    }
}
const styles=StyleSheet.create({
    root:{
      flex:1  
    },
    inputStyle:{
        margin:5
    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"white"
    }
})

export default CreateEmployee