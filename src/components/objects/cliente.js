import { View, Text} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState } from "react";

import clientObjectStyle from "../../styles/componentObjects/clientObjectStyle";
import api from "../../services/api";
import ListClientModal from "../../modals/listClientModal";
import EditClienteModal from "../../modals/editClientModal";

export default function Cliente({cliente}){
    const [clienteData, setClienteData] = useState({});
    const [listModalVisible, setListModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    var imc = (cliente.peso) / Math.pow(cliente.altura/100, 2)
    var roundedIMC = imc.toFixed(2);

    useEffect(() => {
        async function getDadosCliente(){ // recebe objeto de clientes
            try{
                const response = await api.get("clientes/perfil/" + cliente.id)
                setClienteData(response.data)
            }catch(e){
                console.log(e.message)
            }
        }
        getDadosCliente()
        }, []);

    return(
    <View style = {clientObjectStyle.clientes}>
        <Ionicons name="person-outline" style={clientObjectStyle.clientImage} size={85}/>
        <Text style = {clientObjectStyle.label}>{cliente.nome}</Text>
        <TouchableOpacity style = {clientObjectStyle.showMoreButton}>
            <Ionicons name="add-circle-outline" size={40} 
                onPress={() => {
                    setListModalVisible(!listModalVisible)
                }
            }/>
        </TouchableOpacity>
        
        <ListClientModal 

            listModalVisible = {listModalVisible}
            setListModalVisible = {setListModalVisible} 
            editModalVisible = {editModalVisible}
            setEditModalVisible = {setEditModalVisible} 
            cliente = {clienteData}
            imc = {roundedIMC}
        />

        <EditClienteModal
            editModalVisible = {editModalVisible}
            setEditModalVisible = {setEditModalVisible}
            cliente = {clienteData}
            imc = {roundedIMC}
        />

    </View>
    )
}
