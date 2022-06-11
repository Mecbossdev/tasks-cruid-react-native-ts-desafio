
import styled from 'styled-components/native';
import {AntDesign} from '@expo/vector-icons';


export const Plus = styled(AntDesign)
`
`;
export const Edit = styled(AntDesign)
`
`;
export const Delete = styled(AntDesign)
`
`;

export const Main = styled.View `
    margin: 10px 25px 20px 25px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    background-color: #D9CCC1;
    border-radius: 5px;
    box-shadow: -8px 8px 0px rgba(23, 149, 131, 1);
`;

export const MainHeader = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
`;

export const MainButton = styled.TouchableOpacity`
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

export const ViewTextIcon = styled.Text`
      
`;

export const SafeAreaView = styled.SafeAreaView`
    background-color: #8C503A;
    width: 100%;
    height: 100%;
`;

export const DivButton = styled.View`
    self-align: flex-end;
    display: flex;
    flex-direction: row;
`;

export const ScrollView = styled.ScrollView`
    background-color: #8C503A;
    height: 100%;
`;