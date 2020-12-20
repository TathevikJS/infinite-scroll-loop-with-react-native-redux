import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import Card from './Card';
import Modal from '../UI/Modal';
import ModalBody from './ModalBody';

import { connect } from 'react-redux'
import { fetchCards } from '../../Redux/action';

import styled from 'styled-components'

const CardsContainer = styled.View`
    width: 100%;
    height: 100%;
    background-color: #ffc240;
    padding-top: 35px;
    padding-bottom: 35px;

`

class Cards extends Component {

    state = {
        newData: [],
        page: 1,
        plusLoading: false,
        mainLoading: true,
        open: false,
        dataById: null
    }


    openModalHandler = (id) => {
        this.setState({
            open: true,
            dataById: id
        })
    }

    closeModalHandler = () => {
        this.setState({
            open: false
        })
    }

    renderItem = ({ item }) => (
        <Card item={item} openModal={() => this.openModalHandler(item)} />
    )


    renderActivity = () => {
        if (!this.state.plusLoading) return null
        if (!this.props.fetchCards.length) return null
        return (
            <View style={{ width: '100%', height: 60 }}>
                <ActivityIndicator size="small" color="#009387" />
            </View>
        )
    }


    loadMoreHandler = async () => {
        await this.setState({ page: this.state.page + 10, plusLoading: true })
        await this.props.fetchCards(this.state.page)
        this.setState({
            newData: this.state.newData.concat(this.props.fetchCardsArr)
        })
    }


    fetchData = async () => {
        await this.props.fetchCards(this.state.page)
        this.setState({
            newData: this.props.fetchCardsArr,
            mainLoading: false
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    
    render() {

        return (
            <CardsContainer>
                {this.props.error
                    ?
                    <View style={{ width: '100%', height: '50%' }}>
                        <Text style={{ color: 'red', fontSize: 25 }}>{error}</Text>
                    </View>
                    : null}
                {this.state.mainLoading
                    ?
                    <View>
                        <ActivityIndicator size="small" color="#fff" />
                    </View>
                    :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.newData}
                        keyExtractor={(item, index) => String(index)}
                        ListFooterComponent={this.renderActivity}
                        onMomentumScrollEnd={this.loadMoreHandler}
                        onEndReachedThreshold={10}
                        renderItem={this.renderItem}
                    />
                }

                {this.state.dataById
                    ? <Modal
                        open={this.state.open}
                        close={this.closeModalHandler}
                        body={<ModalBody item={this.state.dataById} />} />
                    : null}
            </CardsContainer>
        );
    }
}


function mapStateToProps(state) {
    return {
        fetchCardsArr: state.cards.fetchCards,
        error: state.cards.error,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCards: (page) => dispatch(fetchCards(page)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cards)

