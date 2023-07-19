import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
    Container, BottomBar, TabButton, Logo,
    Greeting, Title, Rectangle, ContentContainer,
    InfoContainer, GameName, DiscordName,
    DateTime, ResourcesContainer, Button,
    PlayersContainer, PlayersIcon, PlayersCount,
    ButtonIcon, TabButtonImage
} from './styles';


const Home: React.FC = () => {
    const windowHeight = Dimensions.get('window').height;

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
            <BottomBar style={{ bottom: -windowHeight * 0.036 }}>
                <TabButton>
                    <TabButtonImage source={require('../../src/assets/gamesPic.png')} />
                </TabButton>
                <TabButton>
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


