import React from 'react';
import { View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Container, ContentContainer, Logo, Greeting,
    Title, NothingMarkedText, ProcurarPartidasText,
    AquiText, InfoContainer, BottomBar, TabButton,
    TabButtonImage, TouchableOpacity, ImagesContainer,
    AdjustImage
} from './styles';

const Home2: React.FC = () => {
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();

    return (
        <Container>
            <ContentContainer>
                <Logo source={require('../../src/assets/logoPrincipal.png')} />
                <Greeting>Olá, username</Greeting>
                <Title>Suas próximas partidas</Title>
            </ContentContainer>
            <InfoContainer>
                <NothingMarkedText>Você ainda não tem nada marcado 😕</NothingMarkedText>
                <ProcurarPartidasText>
                    Procure novas partidas{' '}
                    <TouchableOpacity>
                        <AquiText>aqui</AquiText>
                    </TouchableOpacity>
                </ProcurarPartidasText>
            </InfoContainer>
            <ImagesContainer>
                <AdjustImage source={require('../../src/assets/noMatches.png')} />
            </ImagesContainer>
            <BottomBar>
                <TabButton onPress={() => navigation.navigate('Home2')}>
                    <TabButtonImage source={require('../../src/assets/gamesPic.png')} />
                </TabButton>
                <TabButton onPress={() => navigation.navigate('Home')}>
                    <TabButtonImage source={require('../../src/assets/homePic.png')} />
                </TabButton>
                <TabButton>
                    <TabButtonImage source={require('../../src/assets/profilePic.png')} />
                </TabButton>
            </BottomBar>
        </Container>
    );
};

export default Home2;