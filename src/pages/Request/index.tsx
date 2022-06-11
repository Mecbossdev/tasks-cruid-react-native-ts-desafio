import React from 'react';

//components
import { Header } from '../../components/Header';

//styled components
import { 
  SafeAreaView, 
  AlignTextCenter, 
  Main, 
  ContainerText, 
  AlignCenter, 
  ButtonForm, 
  ButtonFormText, 
  Star, 
  Staro
} from './styled';

const Request = (props: any) => {

  function handleConclude() {
    props.navigation.navigate('Home');
    if (props.route.params.mehandle) {
      props.navigation.navigate('MyTasks');
    }
  }

  return (
    <SafeAreaView
      scrollEnabled={false}
      keyboardShouldPersistTaps='handled'
    >
      <Header />
      <Main>
        <AlignCenter>
          <ContainerText>
            <AlignTextCenter>
              {props.route.params.lib == 'AntDesign' ? (
                <Staro name={props.route.params.icon} size={26} color="black" />
              ) : (
                <Star name={props.route.params.icon} size={26} color="yellow" />
              )}
            </AlignTextCenter>
            <AlignTextCenter>{props.route.params.title}</AlignTextCenter>
          </ContainerText>


          <ButtonForm onPress={handleConclude}>
            <ButtonFormText>Voltar!</ButtonFormText>
          </ButtonForm>
        </AlignCenter>
      </Main>
    </SafeAreaView>
  );
}

export default Request;