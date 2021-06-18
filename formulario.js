import React from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

import firebase from 'firebase';
import styles from './teladelogin'



const LoginScreen = () => {
  const { register, setValue, handleSubmit, errors } = useForm({ validationSchema: fieldValidationSchema })
	const onSubmit = data => Alert.alert(data.email, data.password)
  
	useEffect(() => {
    register('email')
    register('password')
  }, [register])

  return (
    <View style={styles.mainContainer}>
      <TextField
        label={'Email'}
        error={errors?.email}
        placeholder={'Digite seu email'}
        onChangeText={text => setValue('email', text)}
      />
      <TextField
        secureTextEntry
        label={'Senha'}
        error={errors?.password}
        placeholder={'Digite sua senha'}
        onChangeText={text => setValue('password', text)}
      />
      <Button onPress={handleSubmit(onSubmit)} text={'Cadastrar'} />
    </View>
  )
}

const TextField = ({ error, label, ...inputProps }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
			style={[styles.input, !!error && styles.borderError]}
			{...inputProps}
		/>
    {!!error && <Text style={styles.errorMessage}>{error.message}</Text>}
  </View>
)

export default LoginScreen
```