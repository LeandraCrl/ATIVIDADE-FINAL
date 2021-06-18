import React from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';


import firebase from 'firebase';


export default class LoginScreen extends React.Component{



    
    constructor(props){

        this.state = {

            email: '',
            password: ''

        }

    }

    
    onChangeEmail(value){

        this.setState({

            email: value

        })

    }

    
    onChangePassword(value){

        this.setState({

            password: value

        })

    }


    tryLogin(){

        console.log(this.state);

       
        try{

            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(response => {

                    console.log('USUÁRIO AUTENTICADO -> ', response.user);
                
                    this.props.navigation.replace('Login');

                } ).catch(error => {
                    
                    console.log('ERRO DE AUTENTICAÇÃO', error.code)

                    if(error.code === 'auth/user-not-found'){

                       Alert.alert(
                                    'USUÁRIO NÃO ENCONTRADO', 
                                    'DESEJA CRIAR UM NOVO USUÁRIO COM OS DADOS INFORMADOS?',
                                    [
                                        
                                        {
                                            text: 'NÃO',
                                            onPress: () => {console.log('CLICOU NO NÃO!')}
                                        },
                                        
                                        
                                        {
                                            text: 'SIM',
                                            onPress: () => {
                                                            console.log('CLICOU NO SIM!');
                                                            firebase
                                                            .auth()
                                                            .createUserWithEmailAndPassword(this.state.email, this.state.password)
                                                            .then( user => {

                                                                console.log('USUÁRIO CRIADO COM SUCESSO->', user)
                                                                this.props.navigation.replace('Login');

                                                            }).catch(error => {

                                                                console.log('ERRO AO CRIAR USUÁRIO->', error)

                                                            })

                                                        
                                                           }

                                        }
                                    ]

                                    );

                    }


                })

        }

        catch(error){

            console.log('ERRO NO TRY -> ', error);

        }

    }

    componentDidMount(){

        const firebaseConfig = {
            apiKey: "AIzaSyA6nTtt4093Vm_G8kcyV2VyWIZlTW_aBo8",
            authDomain: "ds-pam1-leandra.firebaseapp.com",
            projectId: "ds-pam1-leandra",
            storageBucket: "ds-pam1-leandra.appspot.com",
            messagingSenderId: "858106547596",
            appId: "1:858106547596:web:9888914e70cd88cbb55aa9",
            measurementId: "G-8TD5D7EZBT"
          };

          if(firebase.apps.length === 0){

            firebase.initializeApp(firebaseConfig);

          }

    

    }

    render(){

        return(

            <View>

                

                <TextInput 
                    style={ styles.input } 
                    placeholder="seuemail@gmail.com" 
                    onChangeText={ value => {
                                
                                                this.onChangeEmail(value);
                                                
                    
                                            } 
                                }
                    />

                <TextInput 
                    style={ styles.input } 
                    placeholder="******" 
                    secureTextEntry 
                    onChangeText={ value => {
                        
                                                this.onChangePassword(value);
                                                
                                            } 
                                }
                    />

                <Button title="ENTRAR"    
                
                onPress={ () => this.cadastrarUsuario(this.state) } />

            </View>

        )

    }

}

const styles = StyleSheet.create({

    input:{
        padding: 20,
        borderBottomWidth:2,
        borderBottomColor: '#000'
        
    }

})