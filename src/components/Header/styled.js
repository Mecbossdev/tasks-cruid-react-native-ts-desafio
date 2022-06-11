import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const HeaderContainer = styled.View `
    display: flex;
    width: 100%;
    height: 70px;
    background-color: #D9CCC1;
    margin-top: 30px;
    border-bottom-width: 5px;
    border-bottom-color: #023E73;
    align-items: center;
    justify-content: center;
`;

export const Plus = styled(AntDesign)`
`;

export const HeaderLogo = styled.TouchableOpacity `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogoImage = styled.Image `
    width: 50px;
    height: 30px;
`;

export const TextLogo = styled.Text `
    color: #023E73;
    font-size: 14px;
    font-weight: bold;    
`;


export const HeaderButton = styled.TouchableOpacity `
    position: absolute;
    right: 20px;
`;

export const ContentButton = styled.TouchableOpacity`
    width: 100px;
    position: absolute;
    left: 15px;
    max-height: 50px;
    background-color: #023E73;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #023E73;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;    
`;

export const HeaderMyTasks = styled.Text `
    color: #023E73;
    font-weight: bold;
`;

export const HeaderButtonText = styled.Text `
    font-size: 10px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;