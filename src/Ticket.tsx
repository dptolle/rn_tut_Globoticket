import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import globoTickets, {GloboEvent} from './TicketDB';

interface TicketsProps {
    navigation: any;
}
const Tickets = ({navigation}: TicketsProps) => {

    const ticketItem: any = (data: {index: number, item:GloboEvent}) => {

        return (
            <View style={styles.tickets}>
                <View>
                    <Image
                        style={styles.img}
                        source={data.item.image}
                    />
                </View>
                <View>
                    <Text style={styles.tickettitle}>
                        {data.item.event}
                    </Text>
                    <Text style={styles.ticketshortdescription}>
                        {data.item.shortDescription}
                    </Text>
                    <Text
                        style={styles.ticketdescription}
                        numberOfLines={2}
                        ellipsizeMode='tail'
                    >
                        {data.item.description}
                    </Text>
                    <Text style={styles.ticketshortdescription}>
                        {data.item.price}
                    </Text>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={ () => {
                        navigation.navigate('Purchase', {ticketId: data.item.eventId});
                    }}
                    >
                    <Text style={styles.ticketbutton}>
                        GET TICKETS
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={globoTickets}
                renderItem={ticketItem}
                keyExtractor={(item) => item.eventId}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button:{},
    container: {
        paddingTop:15,
        paddingBottom: 15
    },
    tickets:{
        flexDirection:'column'
    },
    img:{
        height: 180,
        width:'100%',
    },
    tickettitle: {
        fontWeight:'bold',
        textAlign:'center'
    },
    ticketshortdescription:{
        fontWeight:'600',
        paddingTop:5,
        textAlign:'center'
    },
    ticketdescription:{
        fontWeight: '600',
        padding: 15
    },
    ticketbutton:{
        textAlign:'center',
        fontWeight: 'bold',
        paddingBottom: 15,
        paddingTop: 5
    }

});

export default Tickets;
