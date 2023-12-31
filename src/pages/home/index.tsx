import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
    Container, BottomBar, TabButton, Logo,
    Greeting, Title, Rectangle, ContentContainer,
    InfoContainer, GameName, DiscordName,
    DateTime, ResourcesContainer, Button,
    PlayersContainer, PlayersIcon, PlayersCount,
    ButtonIcon, TabButtonImage, ButtonChange
} from './styles';

import { useNavigation } from '@react-navigation/native';


const Home: React.FC = () => {
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();

    return (
        <Container>
            <ContentContainer>
                <Logo source={require('../../assets/logoPrincipal.png')} />
                <Greeting>Olá, username</Greeting>
                <Title>Suas próximas partidas</Title>
                <Rectangle>
                    <InfoContainer>
                        <GameName>Minecraft</GameName>
                        <DiscordName>Discord</DiscordName>
                        <DateTime>06/07/2023 | 19h</DateTime>
                    </InfoContainer>
                    <ResourcesContainer>
                        <Button onPress={() => navigation.navigate('Home2')}>
                            <ButtonIcon source={require('../../assets/delete.png')} />
                        </Button>
                        <PlayersContainer>
                            <PlayersCount>05</PlayersCount>
                            <PlayersIcon source={require('../../assets/players.png')} />
                        </PlayersContainer>
                    </ResourcesContainer>
                </Rectangle>
            </ContentContainer>
            <BottomBar>
                <TabButton onPress={() => navigation.navigate('Games')}>
                    <TabButtonImage source={require('../../assets/gamesOff.png')} />
                </TabButton>
                <TabButton onPress={() => navigation.navigate('Home')}>
                    <TabButtonImage source={require('../../assets/homeOn.png')} />
                </TabButton>
                <TabButton onPress={() => navigation.navigate('Profile')}>
                    <TabButtonImage source={require('../../assets/profileOff.png')} />
                </TabButton>
            </BottomBar>
        </Container >
    );
};

export default Home;


