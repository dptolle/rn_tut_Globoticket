import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import globoTickets from './TicketDB';

interface TicketPurchaseProps {
route: any,
navigation: any
}

const TicketPurchase = ({route, navigation}: TicketPurchaseProps) => {
    const [ticketQuantity, setTicketQuantity]:[any, Function] = useState('1');
    const {ticketId} = route.params;
    const selectedEvent = globoTickets.find(tickets => tickets.eventId === ticketId);

    const purchase = () => {
        let price = selectedEvent?.price || 0 * ticketQuantity;
        Alert.alert(`Your cost is ${price}`);
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{selectedEvent?.event}</Text>
            <Image
                style={styles.ticketimage}
                source={selectedEvent?.image}
            />
            <Text style={styles.shortdescription}>{selectedEvent?.shortDescription}</Text>
            <Text style={styles.description}>{selectedEvent?.description}</Text>
            <View style={styles.purchaserow}>
                <Text style={styles.shortdescription}>Quantity :</Text>
                <TextInput
                    style={styles.quantityinput}
                    onChangeText={ quantity => setTicketQuantity(quantity)}
                    value={ticketQuantity}
                    selectTextOnFocus={true}
                    keyboardType='numeric'
                />
            </View>
            <Text style={styles.price}>
                Total Price: ${selectedEvent?.price || 0 * ticketQuantity}
            </Text>
            <TouchableOpacity
                onPress={purchase}
                style={styles.button}
            >
                <Text style={styles.buttontext}>
                Buy Now
            </Text>
            </TouchableOpacity>
        </View>
    );
}


const styles=StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems:'center',
        paddingTop: 10
    },
    title:{
        paddingBottom: 10
    },
    ticketimage:{
        height: 100,
        width: '100%'
    },
    shortdescription:{
        paddingTop: 5,
        textAlignVertical:'center'
    },
    description:{
        textAlign:'left',
        padding: 10,
        fontWeight:'600'
    },
    purchaserow:{
        flexDirection:'row'
    },
    quantityinput:{
        borderWidth: 1,
        height: 38,
        width:40,
        marginLeft:25
    },
    price:{
        paddingTop:5,
        paddingBottom: 10
    },
    button:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: '60%'
    },
    buttontext:{
        textAlign:'center',
        padding:5
    }
});

export default TicketPurchase;
