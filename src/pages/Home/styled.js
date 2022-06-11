import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const Edit = styled(AntDesign)`
    color: #023E73;
`;
export const Delete = styled(AntDesign)`
    color: #023E73;
`;
export const Star = styled(AntDesign)`
    color: yellow;
`;
export const Staro = styled(AntDesign)`
    color: #023E73;
`;


export const Main = styled.View`
    margin: 10px 25px 20px 25px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    background-color: #D9CCC1;
    border-radius: 5px;
    box-shadow: -9px 9px 0px rgba(23, 149, 131, 1);
`;

export const MainHeader = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
`;

export const ButtonIcon = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 30px;
    height: 30px
    margin: 0px 5px;
`;


export const MainContent = styled.View`
    display: flex;
`;

export const ContentTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 10px;
`;

export const ContentText = styled.Text`
    font-size: 14px;
`;

export const TaskName = styled.Text`
    color: #023E73;
    font-weight: bold;
    flex: 1;
`;

export const TextInput = styled.TextInput`
    border: 1px solid #D9CCC1;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #D9CCC1;
    max-height: 40px;
    color: #111;
    padding: 10px 10px;
    flex: 1px;
`;

export const ContentButton = styled.TouchableOpacity`
    width: 100px;
    max-height: 55px;
    background-color: #023E73;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #023E73;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;    
`;

export const SafeAreaView = styled.SafeAreaView`
    background-color: #8C503A;
    width: 100%;
    height: 100%;
`;

export const DivButton = styled.View`
    align-self: flex-end;
    display: flex;
    flex-direction: row;
`;

export const HeaderButtonText = styled.Text`
    font-size: 16px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    padding: 20px;
    display: flex;
    flex-direction: row;
`;
export const ViewTextIcon = styled.Text`
      
`;

