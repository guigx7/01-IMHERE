import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home(){
  const participants = ['Guilherme', 'Carlos', 'Enrico', 'José', 'Inácio', 'Ana', 'Marcia', 'Pedro', 'Lais', 'Marcelo', 'Leonardo', 'Julia', 'Gabriela',  'Jair', 'Marcio']

  function handleParcipantAdd() {
    if(participants.includes("Carlos")){
      return Alert.alert("Participante já existente!", "Já existe um participante na lista com esse nome, digite um nome diferente para adicionar.")
    }
  }

  function handleParcipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Participante deletado")
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 5 de Agosto de 2023
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleParcipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParcipantRemove(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <Text style={styles.listEmptyText}>
              A lista ainda está vazia. 
            </Text>
            <Text style={styles.listEmptyText}>
            Adicione participantes na sua lista de presença! 
            </Text>
          </>
        )}
      />

    </View>
  )
}