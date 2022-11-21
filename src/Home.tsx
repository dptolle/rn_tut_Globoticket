import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Menu from './Menu';

export interface HomeProps {
    username: string;
}

const Home = (props: HomeProps) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.globologo}
                source={require('../images/React_logo.png')}
            />
            <Text style={styles.title}>Welcome to GloboTicket</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <Image
                style={styles.heroimage}
                source={require('../images/React_logo.png')}
            />
            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>
            <View style={styles.menu}>
                <Menu />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    menu:{
        position:'absolute',
        bottom: 10
    },
    heroimage:{
        height: 170,
        width:'100%'
    },
    container:{
        flexDirection: 'column',
        alignItems:'center',
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1,
    },
    globologo: {
        height:100,
        width: 150
    },
    title:{},
    subtitle:{
        paddingTop:5,
    },
    textcontainer:{
        padding:20,
    },
    content:{
        fontWeight: '300',
    }
});

const introText=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

export default Home;
