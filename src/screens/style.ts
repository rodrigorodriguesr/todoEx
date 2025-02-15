import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor: '#1A1A1A',
},
header: {
  backgroundColor: '#0D0D0D',
  height: '20%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
},
image: {
  width: 100,
  height: 100,
  resizeMode: 'contain',
},
form: {
  position: 'absolute', // Posiciona o formulário de forma independente
  top: '16%', // Define que ele começa logo após o header
  width: '100%',
  flexDirection: 'row',
  paddingHorizontal: 16, // Adiciona espaçamento lateral
  alignItems: 'center',
},
formActive: {
    borderWidth: 2, // Espessura da borda
    borderColor: "#00BFFF", // Cor da borda
    borderRadius: 8, // Cantos arredondados
  },
input: {
  flex: 1,
  height: 56,
  backgroundColor: '#333333',
  borderRadius: 5,
  color: '#fff',
  fontSize: 16,
  marginRight: 12,
  paddingHorizontal: 8,
},
button: {
  width: 56,
  height: 56,
  borderRadius: 5,
  backgroundColor: '#1E6F9F',
  alignItems: 'center',
  justifyContent: 'center',
},
buttonText: {
  color: "#fff",
  fontSize: 24,
},
tasks: {
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 45,
  flexDirection: 'row',
  justifyContent: 'space-between',
  
},
tasks1: {
 fontSize: 18,
 color: '#4ea8de',
 fontWeight: 'bold',
 paddingRight: 10
},
tasks2: {
  fontSize: 18,
  color: '#8284fa',
  fontWeight: 'bold',
  paddingRight: 10
},
bdage: {
  color: '#fff',
  fontWeight: 'bold',
  backgroundColor: "#333",
  borderRadius: 15,
  width: 30, 
  height: 20,
  alignItems: 'center',
  justifyContent: "center",
  paddingLeft: 10,
  paddingRight: 10
},
taskCont: {
  flexDirection: 'row',
  paddingRight: 5,
  justifyContent: 'space-between',
  paddingTop: 25,
},
line: {
  
  height: 1, 
  backgroundColor: '#444', 
  marginTop: 16,
  marginLeft: 20,  
  marginRight: 20,
 
},
imageEmpty: {
  alignItems: 'center',
  paddingTop: 35,
},
listEmpty: {
  alignItems: 'center',
  paddingTop: 15,
  color: '#f2f2f2',
  marginLeft: 20, 
  
},
concluidaText: {
  textDecorationLine: "line-through",
  color: "#6B6B6B",
},




});

