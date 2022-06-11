import React, { useContext } from 'react';
import logo from '../../assets/icon.png';
import api from '../../services/api';

//components
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';

import { useNavigation } from '@react-navigation/core';
import { PostsContext } from '../../interfaces/posts';

//styled components
import {
  Main,
  UserIcon,
  MainHeader,
  TaskName,
  MainButton,
  MainContent,
  ScrollView,
  SafeAreaView,
  DivButton,
  Delete,
  Edit,
  ViewTextIcon,
  ContentTitle,
  ContentText,
  
} from './styled';


const MyTasks = (props: any) => {
  const navigation = useNavigation();

  const { myTasks, setMyTasks } = useContext<any>(PostsContext);

  function handleEditTask(id: any) {
    navigation.navigate('EditTask', { postId: id, type: 'me' });
  }

  async function handleDeleteTask(id: any) {
    try {
      let newMyTasks = myTasks.filter((task: any) => {
        return task.id !== id;
      })
      setMyTasks(newMyTasks);
      navigation.navigate('Request', {
        title: 'A task foi deletada!',
        icon: 'delete',
        lib: 'AntDesign',
        mehandle: true
      })
    } catch (error) {
      navigation.navigate('Request', {
        title: 'Não foi possível deletar a task!',
        icon: 'delete',
        status: error,
        mehandle: true
      })
    }
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <Header />
        {myTasks.map((task: any, key: any) => {
          return (
            <Main key={key}>
              <MainHeader>
                <TaskName>You</TaskName>
                <DivButton>
                  <MainButton onPress={() => handleEditTask(key)}>
                    <ViewTextIcon>
                      <Edit name="edit" size={26} color="black" />
                    </ViewTextIcon>
                  </MainButton>
                  <MainButton onPress={() => handleDeleteTask(task.id)}>
                    <ViewTextIcon>
                      <Delete name="delete" size={26} color="black" />
                    </ViewTextIcon>
                  </MainButton>
                </DivButton>
              </MainHeader>
              <MainContent>
                <ContentTitle>{task.title}</ContentTitle>
                <ContentText>{task.body}</ContentText>
              </MainContent>
            </Main>
          )
        })}
        
      </SafeAreaView>
      
    </ScrollView>
    
  )
}

export default MyTasks;