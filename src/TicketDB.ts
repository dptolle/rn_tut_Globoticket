import { ImageSourcePropType } from 'react-native';

export interface GloboEvent {
    event: string;
    image: ImageSourcePropType;
    eventId: string;
    description: string;
    price: number;
    shortDescription: string;
}

const globoTickets: GloboEvent[] = [
    {
        event: 'DJ Conference',
        image: require('../images/React_logo.png'),
        eventId: 'SG-1',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut `,
        shortDescription: 'Lorem ipsum dolor',
        price: 100.00
    },
    {
        event: 'Developer Conference',
        image: require('../images/React_logo.png'),
        eventId: 'SG-2',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut `,
        shortDescription: 'Lorem ipsum dolor',
        price: 10.00
    },
    {
        event: 'PO Conference',
        image: require('../images/React_logo.png'),
        eventId: 'SG-3',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut `,
        shortDescription: 'Lorem ipsum dolor',
        price: 140.00
    },
    {
        event: 'SM Conference',
        image: require('../images/React_logo.png'),
        eventId: 'SG-4',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut `,
        shortDescription: 'Lorem ipsum dolor',
        price: 60.00
    },
];

export default globoTickets;
