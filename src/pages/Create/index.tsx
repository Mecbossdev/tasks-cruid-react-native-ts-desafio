import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';


import { View, StyleSheet, Alert, Modal, ScrollView, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import  Header  from '../../components/Header';
import { 
  Main, 
  PageTitle, 
  TextInputForm, 
  TextAreaInputForm, 
  ButtonForm, 
  ButtonFormText, 
  ButtonAlign, 
  LabelInput, 
  SafeAreaViewScroll 
} from './styled';

import { PostsContext } from '../../interfaces/posts';

const CreateTasks = () => {
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskBody, setTaskBody] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const navigation = useNavigation();

  const { myTasks, setMyTasks } = useContext<any>(PostsContext);


  function handleTask() {
    try {
      if (taskBody !== '' && taskTitle !== '') {
        api.post('/posts', { title: taskTitle, body: taskBody }).then(response => {
          setMyTasks([...myTasks, {
            title: response.data.title,
            body: response.data.body,
            id: myTasks.length + 1
          }])
        })
        navigation.navigate('Requisition', {
          title: 'Sua task foi criada com sucesso!',
          icon: 'plussquareo',
          lib: 'AntDesign',
          mehandle: true
        });
      } else {
        setModalVisible(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaViewScroll
      keyboardShouldPersistTaps='handled'
    >
      <Header />
      <PageTitle>Criar Task</PageTitle>
      <Main>
        <ScrollView
          scrollEnabled={false}
          keyboardShouldPersistTaps='handled'
        >
          <LabelInput>Título da Task</LabelInput>
          <TextInputForm
            placeholder="Digite aqui seu título..."
            onChangeText={setTaskTitle} />
        </ScrollView>
        <View>
          <LabelInput>Conteúdo</LabelInput>
          <TextAreaInputForm
            multiline={false}
            placeholder="Digite aqui seu conteúdo..."
            onChangeText={setTaskBody} />
        </View>
        <ButtonAlign>
          <ButtonForm onPress={handleTask}>
            <ButtonFormText>Postar</ButtonFormText>
          </ButtonForm>
        </ButtonAlign>
      </Main>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("O modal desapareceu");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.viewContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Por favor, preencha a task da sua maneira!</Text>
            <ButtonAlign>
              <ButtonForm
                onPress={() => setModalVisible(!modalVisible)}
              >
                <ButtonFormText>Certo!</ButtonFormText>
              </ButtonForm>
            </ButtonAlign>
          </View>
        </View>
      </Modal>
    </SafeAreaViewScroll>
  );
}



const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default CreateTasks;