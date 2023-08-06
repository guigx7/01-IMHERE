import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home(){
  function handleParcipantAdd() {
    console.log("Você clicou no botão de adicionar");
  }

  function handleParcipantRemove(name: string) {
    console.log(`Você clicou no botão de remover o participante ${name}.`)
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

      {/* <Participant name="Guilherme" onRemove={handleParcipantRemove} />
      <Participant name="Carlos" onRemove={handleParcipantRemove} />
      <Participant name="Enrico" onRemove={handleParcipantRemove} /> */}
      <Participant name="José" onRemove={() => handleParcipantRemove("José")} />

    </View>
  )
}