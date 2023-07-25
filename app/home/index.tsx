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
                <Logo source={require('../../src/assets/logoPrincipal.png')} />
                <Greeting>Olá, username</Greeting>
                <Title>Suas próximas partidas</Title>
                <Rectangle>
                    <InfoContainer>
                        <GameName>Minecraft</GameName>
                        <DiscordName>Discord</DiscordName>
                        <DateTime>06/07/2023 | 19h</DateTime>
                    </InfoContainer>
                    <ResourcesContainer>
                        <Button>
                            <ButtonIcon source={require('../../src/assets/delete.png')} />
                        </Button>
                        <PlayersContainer>
                            <PlayersCount>05</PlayersCount>
                            <PlayersIcon source={require('../../src/assets/players.png')} />
                        </PlayersContainer>
                    </ResourcesContainer>
                </Rectangle>
            </ContentContainer>
            <ButtonChange onPress={() => navigation.navigate('Home2')}>
                <TabButtonImage source={require('../../src/assets/delete.png')} />
            </ButtonChange>
            <BottomBar>
                <TabButton>
                    <TabButtonImage source={require('../../src/assets/gamesPic.png')} />
                </TabButton>
                <TabButton onPress={() => navigation.navigate('Home')}>
                    <TabButtonImage source={require('../../src/assets/homePic.png')} />
                </TabButton>
                <TabButton>
                    <TabButtonImage source={require('../../src/assets/profilePic.png')} />
                </TabButton>
            </BottomBar>
        </Container >
    );
};

export default Home;


