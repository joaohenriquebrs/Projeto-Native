import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
    Container, BottomBar, TabButton, Logo,
    RectangleCulture, Title, Rectangle, ContentContainer,
    InfoContainer, GameName, DiscordName,
    DateTime, ResourcesContainer, Button,
    PlayersContainer, PlayersIcon, PlayersCount,
    ButtonIcon, TabButtonImage, Phrase
} from './styles';

import { useNavigation } from '@react-navigation/native';


const Games: React.FC = () => {
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();

    return (
        <Container>
            <ContentContainer>
                <Logo source={require('../../assets/logoPrincipal.png')} />
                <RectangleCulture>
                    <Phrase>Vai lá, marca uma partida e chama a galera!</Phrase>
                </RectangleCulture>
                <Title>Próximas partidas</Title>
                <Rectangle>
                    <InfoContainer>
                        <GameName>Minecraft</GameName>
                        <DiscordName>Discord</DiscordName>
                        <DateTime>06/07/2023 | 19h</DateTime>
                    </InfoContainer>
                    <ResourcesContainer>
                        <Button>
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
                    <TabButtonImage source={require('../../assets/gamesOn.png')} />
                </TabButton>
                <TabButton onPress={() => navigation.navigate('Home')}>
                    <TabButtonImage source={require('../../assets/homeOff.png')} />
                </TabButton>
                <TabButton onPress={() => navigation.navigate('Profile')}>
                    <TabButtonImage source={require('../../assets/profileOff.png')} />
                </TabButton>
            </BottomBar>
        </Container >
    );
};

export default Games;


