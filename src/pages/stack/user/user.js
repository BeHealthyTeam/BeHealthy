import { useState, useEffect} from "react"
import { View, Text, SafeAreaView, Pressable} from "react-native"
import { Image } from "react-native-elements"
import Ionicons from '@expo/vector-icons/Ionicons'
// Backend imports
import { Auth } from "aws-amplify"
import api from "../../../services/api"
import EditUser from "./modal/editUser"
// Style import
import profileComponentStyle from "../../../styles/componentObjects/profileComponentStyle"
import DetailUser from "./modal/detailUser"

export default function User(props){
    
    const [userData, setUserData] = useState({})
    const [editModalVisible, setEditModalVisible] = useState(false)
    const [detailUserModal, setDetailUserModal] = useState(false)

    // const [userData, setUserData] = useState({
    //     "age": null, "email": "squad.behealthy@gmail.com", "height": 100, "name": "Gabegold", "phone": "", "profilePicture": null, "regionalCouncilNumber": "123", "title": "DR HANSCHUCRUTE", "weight": 2
    // })

    function logOut(){
        try{
            Auth.signOut();
        }
        catch(e){
            alert(e.message)
        }
    }
    useEffect(() => {
        async function getProfileData(){
            try{
                const session = await Auth.currentSession()
                const idToken = session.getIdToken().getJwtToken();
                const user = await api.get("/users/" + Auth.user.attributes.sub, 
                {
                    headers: {
                        "Authorization": idToken
                    },
                }) // Header

                setUserData(user.data)
            }catch(e){
                console.log(e)
            }
        }
        getProfileData()
    }, [editModalVisible]);
    
    return(
        <SafeAreaView style={profileComponentStyle.background}>
            <View style={profileComponentStyle.profileImageContainer}>
                <Image source={{uri:'https://revolucaonerd.com/wordpress/wp-content/files/revolucaonerd.com/2022/11/escanor.webp'}}
                style={profileComponentStyle.profileImage}/>
            </View>
            {
               (userData.regionalCouncilNumber  === null || userData.regionalCouncilNumber === "") ?
            (<></>)
            : 
            (<View style={profileComponentStyle.profileTitlesContent}>
                <Text style={profileComponentStyle.profileTitleLabel}>{userData.title}</Text>
            </View>)
            }
            <View style={profileComponentStyle.textContainer}>
                <View style={profileComponentStyle.textContent}>
                    <View style={profileComponentStyle.textRow}>
                        <View style={profileComponentStyle.textColumnTitle}>
                            <Text style={profileComponentStyle.labelTitle}>Nome:</Text>
                            <Text style={profileComponentStyle.labelTitle}>E-mail:</Text>
                            <Text style={profileComponentStyle.labelTitle}>CRN:</Text>
                            <Text style={profileComponentStyle.labelTitle}>Telefone:</Text>
                        </View>
                        <View style={profileComponentStyle.textColumnData}>
                            <Text style={profileComponentStyle.labelData}>{userData.name}</Text>
                            <Text style={profileComponentStyle.labelData}>{userData.email}</Text>
                            <Text style={profileComponentStyle.labelData}>{userData.regionalCouncilNumber}</Text>
                            <Text style={profileComponentStyle.labelData}>{userData.phone}</Text>
                        </View>
                    </View>
                </View>
            </View>
            
            <View style={profileComponentStyle.buttons}>
                <Pressable onPress={() => setEditModalVisible(!editModalVisible)}>
                    <Ionicons name="create-outline" style={profileComponentStyle.editIcon} size={30}/>
                </Pressable>
                <Pressable onPress = {() => setDetailUserModal(!detailUserModal) }>
                    <Ionicons name="reader-outline" style={profileComponentStyle.logOutIcon} size={30}/>
                </Pressable>
                <Pressable onPress = { logOut }>
                    <Ionicons name="log-out-outline" style={profileComponentStyle.logOutIcon} size={30}/>
                </Pressable>
            </View>
            <EditUser
                editModalVisible = {editModalVisible}
                setEditModalVisible = {setEditModalVisible}
                userData = {userData}
                setUserData = {setUserData}
            />
            <DetailUser
                detailUserModal = {detailUserModal}
                setDetailUserModal = {setDetailUserModal}
                userData = {userData}
                setUserData = {setUserData}
            />
        </SafeAreaView>
    )
}

