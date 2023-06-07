import React from 'react'
import { View,Text,Image,StyleSheet } from 'react-native'
import {TextInput,Button,Card} from 'react-native-paper'

const Prompt = () => {
  function request(){
    fetch("https://api.openai.com/v1/completions",
    {
      method: "POST",
      headers : {
        Accept: "application/json",
        "Content-Type" : "application/json",
        Authorization: "Bearer " + "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"
},
      body: JSON.stringify({
      model: "text-davinci-003",
      prompt: "Existe o Homem-aranha ?",
      max_tokens: 2048,
      temperature: 0.5
      })
    })
    .then((resposta) => resposta.json())
    .then((dados) => console.log(dados))


  }
  return (
   <View style={styles.prompt}>
   <Text></Text>
   <TextInput label=" Faça sua Pergunta"/> 
   <Button onClick={request} mode="contained">Enviar</Button>
   <Card>
   <Card.Content>
      <Text></Text>
   </Card.Content>

   </Card>
   </View>
  )
}
const styles = StyleSheet.create({
  prompt: {
    height: "55px",
    width: "100%",
    padding:"20px",
    flex: 1,
    gap: "20px"
    
  }  


})

export default Prompt


//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