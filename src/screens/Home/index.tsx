import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home(){
  const participants = ['Guilherme', 'Carlos', 'Enrico', 'José', 'Inácio', 'Ana', 'Marcia', 'Pedro', 'Lais', 'Marcelo', 'Leonardo', 'Julia', 'Gabriela',  'Jair', 'Marcio']

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

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParcipantRemove("José")} 
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