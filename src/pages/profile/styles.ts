import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background-color: #f0f8ff;
`;

export const ContentContainer = styled.View`
  width: 90%;
  align-self: center;
`;

export const TabButton = styled.TouchableOpacity`
  padding: 10px;
`;

export const Logo = styled.Image`
  margin-top: 50px;
  align-self: center;
`;

export const PerfilPic = styled.Image`
  margin-top: 30px;
  align-self: center;
  border: 2px solid #58CBFB;
  border-radius: 100px;
`;

export const Username = styled.Text`
  margin-top: 10px;
  align-self: center;
  font-size: 22px;
  font-weight: 500;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 500;
  width: 240px;
  margin-top: 20px;
  align-self: flex-start;
`;

export const InfoEmail = styled.Text`
  margin-bottom: 5px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  color: #0E0E0E;
`;

export const InfoContainer = styled.View`
  width: 95%;
  border-color: #CFCFCF;
  border-bottom-width: 1px;
  align-self: flex-start;
`;

export const GamesContainer = styled.View`
`;

export const TitleContainer = styled.Text`
  font-size: 22px;
  font-weight: 500;
  width: 240px;
  margin-top: 20px;
  align-self: flex-start;
`;

export const AvailableGames = styled.View`
  margin-top: 15px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const GameXText = styled.Text`
  color: #FFF;
  font-weight: 400;
`;

export const GameXContainer = styled.View`
  background-color: #58CBFB;
  width: 110px;
  margin: 10px;
  margin-left: 0;
  padding: 10px 10px 10px 15px;
  paddin-left: 15px;
  border-radius: 20px;
`;

export const BottomBar = styled.View`
  height: 60px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  bottom: 0;
  position: absolute;
`;

export const TabButtonImage = styled.Image`
  width: 32px;
  height: 32px;
`;