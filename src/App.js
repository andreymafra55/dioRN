import React from 'react';
import {View, Image,Text, StyleSheet,SafeAreaView,StatusBar,Pressable,Linking} from 'react-native';

const colorGitHub ='#010409'
const colorFontGitHub ='#C9D1D9'
const colorDarkFontGitHub ='#4F565E'

const imageProfileGitHub ='https://avatars.githubusercontent.com/u/102834124?s=400&u=21f58f662c39003e8641652b01ae25b23b5dbfaa&v=4'
const urlToGitHub ='https://github.com/andreymafra55'


const App = () => {

    const handlePressGoToGitHub = async () => {
        console.log('Verificando')
      const res =  await Linking.canOpenURL(urlToGitHub);
      if(res){
          console.log('aprovado')
          console.log('abrindo')
        await Linking.openURL(urlToGitHub); 
      }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle={'light-content'}/>
            <View style={style.content}>
                <Image 
                accessibilityLabel='Andrey sentado com fundo de rio e arvores' 
                style={style.avatar} 
                source={{uri:imageProfileGitHub}}
                />
                <Text
                accessibilityLabel='Nome: Andrey Mafra' 
                style={[style.defualtext,style.name]}>
                Andrey Mafra
                </Text>
                <Text 
                accessibilityLabel='Nickname: andreymafra55'
                style={[style.defualtext,style.nickname]}>
                andreymafra55
                </Text>
                <Text 
                accessibilityLabel='Descrição:Aluno do IFPE | Cursando TSI | Decola Tech'
                style={[style.defualtext,style.description]}>
                Aluno do IFPE | Cursando TSI | Decola Tech
                </Text>
                <Pressable onPress={handlePressGoToGitHub}>
                    <View style={style.button}>
                        <Text style={[style.defualtext,style.textButton]}>
                            Open in Github
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGitHub,
        flex: 1, //expandir para a tela inteira para
        justifyContent: 'center',
        alignItems: 'center',
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor:'white',
        borderWidth: 2,
    },

    defualtext:{
        color: colorFontGitHub,
    },

    name: {
        marginTop:20,
        fontWeight: 'bold',
        fontSize:24,
    },

    nickname: {
        fontSize:18,
        color: colorDarkFontGitHub
    },

    description:{
        fontWeight: 'bold',
        fontSize:14,
    },

    button:{
        marginTop:20,
        backgroundColor: colorDarkFontGitHub,
        borderRadius:10,
        padding:20,
    },

    textButton:{
        fontWeight: 'bold',
        fontSize:16,
    },
});