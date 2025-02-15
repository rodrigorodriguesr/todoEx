import React, { useState, useEffect } from "react";
import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  TextInput, 
  Keyboard, 
  TouchableWithoutFeedback, 
  Alert, 
  FlatList 
} from "react-native";

import { styles as externalStyles } from "../screens/style";
import { Ionicons } from "@expo/vector-icons";

export function Home() {
  const [atividades, setAtividades] = useState<string[]>([]);
  const [atividadeName, setAtividadeName] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [contadorC, setContadorC] = useState(0);
  const [contadorFinish, setContadorFinish] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  useEffect(() => {
    setContadorC(atividades.length);
  }, [atividades]);

  function handleParticipantAdd() {
    if (atividades.includes(atividadeName)) {
      return Alert.alert("Atividade existe", "Já existe uma atividade na lista com esse nome!");
    }
    setAtividades((prevState) => [...prevState, atividadeName]);
    setAtividadeName("");
  }

  function handleParticipantRemove(atividade: string) {
    Alert.alert("Remover", `Remover a atividade ${atividade}?`, [
      {
        text: "Sim",
        onPress: () => {
          setAtividades((prev) => prev.filter((item) => item !== atividade));
          setCompletedTasks((prev) => prev.filter((item) => item !== atividade));
          setContadorFinish((prev) => prev - (completedTasks.includes(atividade) ? 1 : 0));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleToggleComplete(atividade: string) {
    setCompletedTasks((prev) => {
      const newCompletedTasks = prev.includes(atividade)
        ? prev.filter((item) => item !== atividade)
        : [...prev, atividade];

      setContadorFinish(newCompletedTasks.length);
      return newCompletedTasks;
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={externalStyles.container}>
        
        <View style={externalStyles.header}>
          <Image source={require("../imagens/Logo2.png")} style={externalStyles.image} />
        </View>

        <View style={externalStyles.form}>
          <TextInput
            style={[externalStyles.input, isFocused && styles.inputActive]}
            placeholder="Atividade"
            placeholderTextColor={"#6B6B6B"}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={(text) => setAtividadeName(text)}
            value={atividadeName}
          />
          <TouchableOpacity style={externalStyles.button} onPress={handleParticipantAdd}>
            <Text style={externalStyles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={externalStyles.tasks}>
          <View style={externalStyles.taskCont}>
            <Text style={externalStyles.tasks1}>Criadas</Text>
            <Text style={externalStyles.bdage}>{contadorC}</Text>
          </View>
          <View style={externalStyles.taskCont}>
            <Text style={externalStyles.tasks2}>Concluídas</Text>
            <Text style={externalStyles.bdage}>{contadorFinish}</Text>
          </View>
        </View>
        <View style={externalStyles.line} />

        <FlatList
          data={atividades}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <TouchableOpacity onPress={() => handleToggleComplete(item)}>
                <Ionicons
                  name={completedTasks.includes(item) ? "checkmark-circle" : "ellipse-outline"}
                  size={25}
                  color={completedTasks.includes(item) ? "#4CAF50" : "#4EA8DE"}
                />
              </TouchableOpacity>
              <Text style={[styles.taskText, completedTasks.includes(item) && styles.completedText]}>
                {item}
              </Text>
              <TouchableOpacity onPress={() => handleParticipantRemove(item)}>
                <Ionicons name="trash-outline" size={25} color="#ff5555" />
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={externalStyles.imageEmpty}>
              <Ionicons name="document-text-outline" size={45} color="#f2f2f2" />
              <Text style={externalStyles.listEmpty}>
                Nenhuma Atividade Registrada, Adicione uma Atividade!
              </Text>
            </View>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}


//estilização 
const styles = StyleSheet.create({
  inputActive: {
    borderWidth: 1,
    borderColor: "#8284FA",
    borderRadius: 6,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  taskText: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
});
