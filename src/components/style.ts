import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
      container: {
        width: '90%',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#333333',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1, // Espessura da borda
        borderColor: '#4d4d4d', // Cor da borda principal
        shadowColor: '#000', // Sombra para profundidade
        shadowOffset: { width: 0, height: 2 }, // Direção da sombra
        shadowOpacity: 0.3, // Opacidade da sombra
        shadowRadius: 4, // Desfoque da sombra
        elevation: 3, // Elevação no Android
        alignSelf: 'center', // Centraliza horizontalmente
    },

    event: {
        paddingTop: 10,
        paddingBottom: 10,
        color: '#FFF',
        fontSize: 16,
        flex: 1,
        marginLeft: 16
        
    },
   


});