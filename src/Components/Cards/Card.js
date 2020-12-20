import React from 'react';
import { View, Image } from 'react-native'

import styled from 'styled-components'
import moment from 'moment';


const CardContainer = styled.TouchableOpacity`
        width: 300px;
        height: 180px;
        background-color: white;
        margin: 15px;
        align-self: center;
        flex-direction: row;
        border-radius: 30px;
        box-shadow: 5px 5px 15px rgb(0, 0, 0);
`

const ImageContainer = styled.View`
        height: 100%;
        width: 40%;
        justify-content: center;
        align-items: center;
`
const Descriptions = styled.View`
    height: 100%;
    width: 60%;
`


const TitleContainer = styled.View`
    height: 20%;
    width: 100%;
`

const Title = styled.Text` 
    font-size: 20px;
    margin-left: 8px;
    font-weight: bold
`
const InfoContainer = styled.View`
    height: 70%;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;


`
const Info = styled.Text` 
    font-size: 15px;
    margin-top: 10px;
`

const DateContainer = styled.View`
    height: 10%;
    width: 100%;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 30px;
    margin-right: 10px
`

const Date = styled.Text` 
    font-size: 10px;
    margin-right: 30px
`


const Card = ({ item, openModal }) => {
    return (
        <CardContainer onPress={openModal}>
            <ImageContainer>
                <View
                    style={{ width: '80%', height: '60%', borderRadius: 20, overflow: 'hidden' }}>

                    <Image
                        style={{ width: '100%', height: '100%' }}
                        source={{ uri: item.fields.thumbnail }} />
                </View>
            </ImageContainer>
            <Descriptions>
                <TitleContainer>
                    <Title>{item.sectionName}</Title>
                </TitleContainer>
                <InfoContainer>
                    <Info
                        numberOfLines={5}
                    >{item.webTitle}</Info>
                </InfoContainer>
                <DateContainer>
                    <Date>{moment(item.webPublicationDate).format('L')}</Date>
                </DateContainer>
            </Descriptions>
        </CardContainer>
    );
}


export default Card;