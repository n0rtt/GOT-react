import React, { Component } from 'react';
import styled from 'styled-components'
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const ItemDetailsStyle = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`

const Heading = styled.h4`
    margin-bottom: 20px;
    text-align: center; 
`

const Error = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`

const Field = ({ item, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: false,
        error: false
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem()
        }
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateItem = () => {

        const { itemId, getItem } = this.props

        if (!itemId) {
            return
        }

        this.setState({
            loading: true
        })
        
        getItem(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false
                })
            })
            .catch(this.onError)
    }

    render() {
        const { item, loading, error } = this.state
        const {selection} = this.props
        
        const errorMessage = error ? <ErrorMessage /> : null
        const spinner = loading ? <Spinner /> : null
        const content = !(loading || error) ? <View item={item} children={this.props.children} /> : null

        if (!item && !error && selection === 'houses') {
            return <Error>Please, select house</Error>
        }

        if (!item && !error && selection === 'books') {
            return <Error>Please, select book</Error>
        }

        if (!item && !error && selection === 'characters') {
            return <Error>Please, select character</Error>
        }

        return (
            <ItemDetailsStyle rounded>
                {errorMessage}
                {spinner}
                {content}
            </ItemDetailsStyle>
        );
    }

}

const View = ({ item, children }) => {

    const { name } = item

    return (
        <>
            <Heading>{name}</Heading>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, { item })
                    })
                }
            </ul>
        </>
    )
}