import React, { useState, useContext } from 'react';
import { ActivityIndicator, View,  FlatList } from 'react-native';
import logo from '../../assets/icon.png';


//styled components
import {
  Content,
  Main,
  MainContent,
  TaskName,
  MainHeader,
  TextInput,
  ContentButton,
  SafeAreaView,
  DivButton,
  HeaderButtonText,
  Edit,
  Delete,
  Star,
  Staro,
  ViewTextIcon,
  ContentText,
  ContentTitle,
  ButtonIcon,
} from './styled';

//components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

//services
import api from '../../services/api';
import { PostsContext } from '../../interfaces/tasks';
import { useNavigation } from '@react-navigation/core';


const Home = (props: any) => {

  const [search, setSearch] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const navigation = useNavigation();
  const {
    tasks,
    setTasks,
    favTasks,
    setFavTasks,
    max,
    setMax,
    loading
  } = useContext<any>(PostsContext);

  async function load() {
    if (loading) return;

    if (max < 100) {
      setMax(max + 5);
    }
  }

  function handleEditTask(id: any) {
    navigation.navigate('EditTask', { postId: id, type: 'any' });
  }

  async function handleDeleteTask(id: any) {
    try {
      setVisible(true)
      await api.get(`/posts/${id}`).then(response => {
        console.log(response.status);

      })
      setVisible(false)
      navigation.navigate('Requisition', {
        title: 'A task foi deletada com sucesso!',
        icon: 'delete',
        lib: 'AntDesign',
        status: 200
      })
    } catch (error) {
      navigation.navigate('Requisition', {
        title: 'Não foi possível deletar a task!',
        icon: 'delete',
        status: error
      })
    }
  }

  async function handleSaveTask(id: any) {
    setVisible(true)
    if (favTasks.indexOf(id) == -1) {
      await setFavTasks([...favTasks, id])
      setVisible(false)
      navigation.navigate('Requisition', {
        title: 'Essa task foi Favoritada com sucesso!',
        icon: 'star',
        lib: 'AntDesign'
      })
    } else {
      let newFavTasks = favTasks.filter((task: any) => {
        return task !== id;
      })
      await setFavTasks(newFavTasks);
      setVisible(false);

      navigation.navigate('Requisition', {
        title: 'Esse post foi removido dos Favoritos com sucesso!',
        icon: 'star',
        lib: 'AntDesign'
      })
    }
  }

  const searching = async () => {
    await api.get('/posts').then(response => {
      setTasks(response.data.filter((task: any) => {
        return task.title.startsWith(search.toLowerCase())
      }))
    })
  }

  return (
    <SafeAreaView>
      <Loading visible={visible} />
      <Header />
      <Content>
        <TextInput placeholder="Pesquise aqui..." value={search} onChangeText={setSearch} />
        <ContentButton onPress={searching}>
          <HeaderButtonText>Buscar</HeaderButtonText>
        </ContentButton>
      </Content>

      <FlatList
        data={tasks}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) =>
          <ListItem task={item}
            handleSaveTask={handleSaveTask}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
            favTasks={favTasks}
          />}
        onEndReached={load}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooterList Load={loading} />}
      />
      <Footer />
    </SafeAreaView>

  )
}

function FooterList({ Load }: any) {
  if (!Load) return null;
  return (
    <View style={{ padding: 10 }}>
      <ActivityIndicator size={26} />
    </View>

  )
}

function ListItem({ task, handleSaveTask, handleEditTask, handleDeleteTask, favTasks }: any) {
  return (
    <Main key={task.id}>
      <MainHeader>
        <TaskName>TASKS</TaskName>
        <DivButton>
          <ButtonIcon onPress={() => handleSaveTask(task.id)}>
            <ViewTextIcon>
              {favTasks.indexOf(task.id) == -1 ? (
                <Staro name="staro" size={28} color="black" />
              ) : (
                <Star name="star" size={28} color="yellow" />
              )
              }
            </ViewTextIcon>
          </ButtonIcon>
        </DivButton>
      </MainHeader>
      <MainContent>
        <ContentTitle>{task.title}</ContentTitle>
        <ContentText>{task.body}</ContentText>
      </MainContent>
      <DivButton>
        <ButtonIcon onPress={() => handleEditTask(task.id)}>
          <ViewTextIcon>
            <Edit name="edit" size={26} color="black" />
          </ViewTextIcon>
        </ButtonIcon>
        <ButtonIcon onPress={() => handleDeleteTask(task.id)}>
          <ViewTextIcon>
            <Delete name="delete" size={26} color="black" />
          </ViewTextIcon>
        </ButtonIcon>
      </DivButton>
    </Main>


  )
}

export default Home;