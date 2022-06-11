import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import logo from '../../assets/logo.png';

//components
import  Header  from '../../components/Header';

//styled components
import { 
  Main,  
  PageTitle, 
  MainHeader, 
  UserIcon,
  TaskName, 
  DivButton, 
  SafeAreaViewScroll,  
  MainContent, 
  LabelInput, 
  TextInputForm, 
  TextAreaInputForm, 
  ButtonAlign, 
  ButtonForm, 
  ButtonFormText,
  Edit,
  ViewTextIcon,
  
} from './styled';


//services
import api from '../../services/api';
import { PostsContext } from '../../interfaces/tasks';



const EditTask = (props: any) => {


  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const { myTasks, setMyTasks } = useContext<any>(PostsContext);

  const id = props.route.params.postId;
  const type = props.route.params.type;

  useEffect(() => {
    if (type == 'any') {
      api.get(`/posts/${id}`).then(response => {
        setTitle(response.data.title);
        setContent(response.data.body);
      })
    } else if (type == 'me') {
      setTitle(myTasks[id].title)
      setContent(myTasks[id].body)
    }

  }, []);

  function handleEdit() {
    if (type == 'any') {
      api.put(`/posts/${id}`, { title: title, body: content })
        .then(response => {
          console.log(response)
        })
      props.navigation.navigate('Request', {
        title: 'Seu post foi editado com sucesso!',
        icon: 'form',
        lib: 'AntDesign'
      });
    } else if (type == 'me') {
      let tasks = myTasks.filter((t: any, key: any) => key != id)
      setMyTasks([...tasks, {
        title: title,
        body: content,
      }])
      props.navigation.navigate('Request', {
        title: 'Seu post foi editado com sucesso!',
        icon: 'form',
        lib: 'AntDesign',
        mehandle: true
      });
    }
  }

  return (
    <SafeAreaViewScroll>
      <Header />
      <PageTitle>Editar Task</PageTitle>
      <Main>
        <MainHeader>
          <UserIcon source={logo} />
          <TaskName>TasksCruid</TaskName>
          <DivButton>
            <ViewTextIcon>
              <Edit name="form" size={24} color="black"/>
            </ViewTextIcon>
          </DivButton>
        </MainHeader>
        <MainContent>
          <View>
            <LabelInput>Título da Task</LabelInput>
            <TextInputForm
              value={title}
              onChangeText={setTitle}
              placeholder="Digite o título..."
            />
          </View>
          <View>
            <LabelInput>Conteúdo</LabelInput>
            <TextAreaInputForm
              value={content}
              multiline={true}
              onChangeText={setContent}
              placeholder="Digite aqui o Conteúdo..."
            />
          </View>
        </MainContent>

        <ButtonAlign>
          <ButtonForm onPress={handleEdit}>
            <ButtonFormText>Editar</ButtonFormText>
          </ButtonForm>
        </ButtonAlign>
      </Main>
    </SafeAreaViewScroll>
  );
}

export default EditTask;