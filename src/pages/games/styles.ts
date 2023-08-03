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

export const RectangleCulture = styled.View`
  height: 70px;
  width: 100%;
  border-radius: 5px;
  align-self: center;
  background-color: red;
  margin-top: 20px;
  align-items: center;
  justify-content: flex-start;
`;

export const Phrase = styled.Text`
  margin-left: 30px;
  width: 175px;
  color: #FFF;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 23px;
  font-weight: 500;
  width: 240px;
  margin-top: 20px;
  align-self: flex-start;
`;

export const Rectangle = styled.View`
  height: 80px;
  width: 100%;
  margin-top: 20px;
  align-self: center;
  background-color: rgba(81, 230, 120, 0.2);
  border-radius: 10px;
`;

export const InfoContainer = styled.View`
  padding-left: 20px;
`;

export const GameName = styled.Text`
  padding-top: 12px;
  color: #454545;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const DiscordName = styled.Text`
  margin-top: 2px;
  font-size: 12px;
  color: #454545;
`;

export const DateTime = styled.Text`
  margin-top: 2px;
  font-size: 12px;
  color: #454545;
`;

export const ResourcesContainer = styled.View`
  position: absolute;
  top: 10px;
  right: 20px;
  align-items: flex-end;
`;

export const Button = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  margin-bottom: 11px;
`;

export const ButtonIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

export const PlayersContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PlayersIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const PlayersCount = styled.Text`
  margin-right: 5px;
  margin-top: 1px;
  font-size: 15px;
  font-weight: 300;
  color: #454545;
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

export const ButtonChange = styled.TouchableOpacity`
  align-items: center;
  margin-top: 50px;
`;