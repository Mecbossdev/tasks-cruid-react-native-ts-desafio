import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';


export const Plus = styled(AntDesign)`

`;

export const Edit = styled(AntDesign)`
  
`;

export const Main = styled.View `
    margin: 10px 25px 20px 25px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: -8px 8px 0px rgba(23, 149, 131, 1);
`;

export const PageTitle = styled.Text `
    font-size: 18px;
    color: #fff;
    margin-left: 20px;
    margin-bottom: 20px;
    font-weight: bold;
`;

export const SafeAreaView = styled.SafeAreaView `
    background-color: #93D871;
    width: 100%;
    height: 100%;
`;

export const MainHeader = styled.View `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
`;

export const UserIcon = styled.Image `
    width: 34px;
    height: 26px;
    position: relative;
    top: 0;
`;

export const TaskName = styled.Text`
    color: #023E73;
    font-weight: bold;
    flex: 1;
`;

export const DivButton = styled.View `
    align-self: flex-end;
    display: flex;
    flex-direction: row;
`;

export const SafeAreaViewScroll = styled.ScrollView `
    background-color: #93D871;
    width: 100%;
`;


export const MainContent = styled.View `
    display: flex;
`;

export const LabelInput = styled.Text `
    margin: 10px 0px 10px;
`;

export const ViewTextIcon = styled.Text`
      
`;

export const TextInputForm = styled.TextInput `
    border: 1px solid #179583;
    border-radius: 5px;
    padding: 10px;
    height: 40px;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const TextAreaInputForm = styled.TextInput `
    border: 1px solid #179583;
    border-radius: 5px;
    padding: 10px;
    height: 100px;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const ButtonAlign = styled.View`
    display: flex;
    align-items: flex-end;
`;

export const ButtonForm = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    background-color: #023E73;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #023E73;
    border-radius: 5px;
`;

export const ButtonFormText = styled.Text`
    font-size: 18px;
    color: #fff;
    justify-content: center;
    align-items: center;
`;