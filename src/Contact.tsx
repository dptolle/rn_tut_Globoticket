import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, Alert } from 'react-native';

interface ContactProps {
    navigation: any;
}
const Contact = ({navigation}: ContactProps) => {

    const [formName, setFormName] = useState('Enter Name');
    const [formEmail, setFormEmail] = useState('Enter Email');
    const [formPhoneNumber, setFormPhoneNumber] = useState('Enter Phone Number');
    const [formMessage, setFormMessage] = useState('Let us know whats on your mind');

    const submit = () => {
        if(!formName || !formEmail || !formMessage) {
            Alert.alert('Please enter info in all required fields');
        }
        else {
            Alert.alert(`Thank you ${formName}`);
            navigation.navigate('Home');
        }
    }

    return(
        <View style={styles.form}>
            <Text style={styles.labels}>
                Name: *required
            </Text>
            <TextInput
                style={styles.txtinput}
                onChangeText={ (name: string) => setFormName(name)}
                value={formName}
                autoCapitalize='words'
                selectTextOnFocus={true}
            />
            <Text style={styles.labels}>
                Email: *required
            </Text>
            <TextInput
                style={styles.txtinput}
                onChangeText={ (email: string) => setFormEmail(email)}
                value={formEmail}
                selectTextOnFocus={true}
            />
            <Text style={styles.labels}>
                Phone:
            </Text>
            <TextInput
                style={styles.txtinput}
                onChangeText={ (phone: string) => setFormPhoneNumber(phone)}
                value={formPhoneNumber}
                selectTextOnFocus={true}
            />
            <Text style={styles.labels}>
                Message: *required
            </Text>
            <TextInput
                style={styles.multitxtinput}
                onChangeText={ (message: string) => setFormEmail(message)}
                value={formMessage}
                selectTextOnFocus={true}
                multiline={true}
                numberOfLines={3}
            />
            <Button
                title='Contact us'
                onPress={submit}
                color='#708090'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    form:{
        alignItems:'center',
        flexDirection:'column',
        padding: 18
    },
    labels:{},
    txtinput:{
        borderWidth:1,
        width: '80%',
        paddingBottom: 15
    },
    multitxtinput:{
        borderWidth:1,
        width: '90%',
        height: 120,
        marginBottom: 50
    }
});

export default Contact;
