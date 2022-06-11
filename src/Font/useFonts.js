import * as Font from "expo-font";

import {TiroTelugu_400Regular, TiroTelugo_700Bold } from '@expo-google-fonts/TiroTelugu';


useFonts = async () => {
    await Font.loadAsync({
        'TiroTelugu_400Regular': TiroTelugu_400Regular,
    })
}

export default useFonts;
