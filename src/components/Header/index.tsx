import React from 'react';

import logo from '../../assets/logo.png';

//styled components
import {
  HeaderContainer,
  HeaderLogo,
  LogoImage,
  HeaderButton,
  HeaderButtonText,
  Plus,
  TextLogo,
  HeaderLink,
  HeaderMyTasks,
} from './styled';



import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/stack.routes';
import { StackNavigationProp } from '@react-navigation/stack';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Header = () => {
  const navigation = useNavigation<homeScreenProp>();

  function handleStart() {
    navigation.navigate("CreateTasks");
  }

  function handleMyTasks() {
    navigation.navigate("MyTasks");
  }

  function handleHome() {
    navigation.navigate("Home");
  }

  return (
    <HeaderContainer>
      <HeaderLogo onPress={handleHome} >
        <LogoImage source={logo} />
        <TextLogo>TasksCruid</TextLogo>
      </HeaderLogo>

      <HeaderLink onPress={handleMyTasks}>
        <HeaderMyTasks>Minhas Tasks</HeaderMyTasks>
      </HeaderLink>


      <HeaderButton onPress={handleStart}>
        <HeaderButtonText>
          <Plus name="plussquareo" size={26} color="#023E73" />
        </HeaderButtonText>
      </HeaderButton>


    </HeaderContainer>
  )
}

export default Header;
