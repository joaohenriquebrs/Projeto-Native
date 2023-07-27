import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
    Container, BottomBar, TabButton, Logo,
    PerfilPic, Username, Title, InfoEmail, GamesContainer, ContentContainer,
    InfoContainer, TabButtonImage, TitleContainer, GameXText, AvailableGames, GameXContainer
} from './styles';

import { useNavigation } from '@react-navigation/native';


const Profile: React.FC = () => {
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();

    return (
        <Container>
            <ContentContainer>
                <Logo source={require('../../assets/logoPrincipal.png')} />
                <PerfilPic source={require('../../assets/teste.png')} />
                <Username>Portelinha ✨</Username>
                <Title>Email</Title>
                <InfoContainer>
                    <InfoEmail>lorem.ipsum@gmail.com</InfoEmail>
                </InfoContainer>
                <GamesContainer>
                    <TitleContainer>Jogos</TitleContainer>
                    <AvailableGames>
                        <GameXContainer>
                            <GameXText>lorem ipsum</GameXText>
                        </GameXContainer>
                        <GameXContainer>
                            <GameXText>lorem ipsum</GameXText>
                        </GameXContainer>
                        <GameXContainer>
                            <GameXText>lorem ipsum</GameXText>
                        </GameXContainer>
                        <GameXContainer>
                            <GameXText>lorem ipsum</GameXText>
                        </GameXContainer>
                        <GameXContainer>
                            <GameXText>lorem ipsum</GameXText>
                        </GameXContainer>
                        <GameXContainer>
                            <GameXText>lorem ipsum</GameXText>
                        </GameXContainer>
                        <GameXContainer>
                            <GameXText>lorem ipsum</GameXText>
                        </GameXContainer>
                    </AvailableGames>
                </GamesContainer>
            </ContentContainer>
            <BottomBar>
                <TabButton onPress={() => navigation.navigate('Games')}>
                    <TabButtonImage source={require('../../assets/gamesOff.png')} />
                </TabButton>
                <TabButton onPress={() => navigation.navigate('Home')}>
                    <TabButtonImage source={require('../../assets/homeOff.png')} />
                </TabButton>
                <TabButton onPress={() => navigation.navigate('Profile')}>
                    <TabButtonImage source={require('../../assets/profileOn.png')} />
                </TabButton>
            </BottomBar>
        </Container >
    );
};

export default Profile;


