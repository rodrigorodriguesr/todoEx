import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";

type Props = {
    atividade: string;
    onRemove: () => void;

} //Tipagem

export function Atividade({atividade, onRemove}: Props){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name="ellipse-outline" size={25} color="#4EA8DE"/>
            </TouchableOpacity>
            
            <Text style={styles.event}>
               { atividade }
            </Text>

            <TouchableOpacity>
                <Ionicons name="trash-outline"size={25} color={"#808080"} onPress={onRemove}/>
            </TouchableOpacity>

        </View>
    )
}

