import React from 'react';


//styled components
import {
  HeaderContent,
  HeaderLogo,
  LogoImage,
  LogoText,
  HeaderButton,
  HeaderButtonText,
  HeaderClickLink,
  Plus,
  HeaderMyTasks,
  ContentButton
} from './styled';

import logo from '../../assets/logo.png';

import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/stack.routes';
import { StackNavigationProp } from '@react-navigation/stack';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function Header() {
  const navigation = useNavigation<homeScreenProp>();

  function handleStart() {
    navigation.navigate("CreateTasks");
  }

  function handleMyPosts() {
    navigation.navigate("MyTasks");
  }

  function handleHome() {
    navigation.navigate("Home");
  }

  return (
    <HeaderContent>
      <HeaderLogo onPress={handleHome} >
        <LogoImage source={logo} />
        <LogoText>TasksCruid</LogoText>
      </HeaderLogo>

      <ContentButton onPress={handleMyPosts}>
        <HeaderButtonText>Minhas Tasks</HeaderButtonText>
      </ContentButton>


      <HeaderButton onPress={handleStart}>
        <HeaderButtonText>
          <Plus name="plussquareo" size={26} color="#023E73" />
        </HeaderButtonText>
      </HeaderButton>


    </HeaderContent>
  )
}
