import React from 'react';
import { ImageBackground } from 'react-native';

import styled from 'styled-components'


const Container = styled.View`
      background-color: rgb(255,194,64);
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
`

const HeaderContainer = styled.View`
      width: 100%;
      height: 15%;
      align-items: flex-start;
      justify-content: center;
`

const Header = styled.Text`
      font-size: 35;
      color: white;
      font-weight: bold;
      margin: 10px;
`
const HomeImage = styled.View`
      width: 100%;
      height: 85%;
      align-items: center;
      justify-content: center;
`


const Home = () => {


  return (
    <Container>
      <HeaderContainer>
        <Header>World News</Header>
      </HeaderContainer>
      <HomeImage>
        <ImageBackground
          source={{ uri: 'https://i.pinimg.com/originals/cf/e6/7c/cfe67cc0dcc0290f87a3e1b8c6b13bd7.gif' }}
          style={{ width: '100%', height: '90%' }}>
        </ImageBackground>
      </HomeImage>
    </Container>
  );
}


export default Home;