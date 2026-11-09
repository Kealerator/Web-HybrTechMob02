import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
	  	style={styles.modal}
        animationType="slide"
		backdropColor= "gray"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <Text>This is modal...</Text>
          <Pressable
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.button}>Hide modal</Text>
          </Pressable>
        </View>
      </Modal>

      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text>Show modal message</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
	  margin: 40,
  },
});
