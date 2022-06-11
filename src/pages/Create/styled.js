import styled from 'styled-components/native';

export const ButtonAlign = styled.View `
    display: flex;
    align-items: flex-end;
`;

export const ButtonForm = styled.TouchableOpacity `
    width: 100px;
    height: 40px;
    display: flex;
    background-color: #023E73;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid #023E73;
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

export const ButtonFormText = styled.Text `
    font-size: 18px;
    color: #fff;
    justify-content: center;
    align-items: center;
`;

export const TextInputForm = styled.TextInput `
    border: 1px solid #023E73;
    border-radius: 5px;
    padding: 10px;
    height: 40px;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const TextAreaInputForm = styled.TextInput `
    border: 1px solid #023E73;
    border-radius: 5px;
    padding: 10px;
    height: 100px;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const PageTitle = styled.Text `
    font-size: 18px;
    color: #023E73;
    margin-left: 20px;
    margin-bottom: 20px;
    font-weight: bold;
`;



export const LabelInput = styled.Text `
    margin: 10px 0px 10px;
`;

export const SafeAreaView = styled.SafeAreaView `
    background-color: #8C503A;
    width: 100%;
    height: 100%;
`;

export const SafeAreaViewScroll = styled.ScrollView `
    background-color: #8C503A;
    width: 100%;
    height: 100%;
`;