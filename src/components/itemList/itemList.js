import React, { Component } from 'react';
import styled from 'styled-components'
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const List = styled.ul`
        cursor: pointer;
    `
export default class ItemList extends Component {

    state = {
        itemList: null,
        loading: true,
        error: false
    }

    componentDidMount() {

        const { getData } = this.props

        getData()
            .then((itemList) => {
                this.setState({
                    itemList,
                    loading: false
                })
            })
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {

            const { id } = item
            
            const label = this.props.renderItem(item)

            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {

        const { itemList, error, loading } = this.state

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(itemList)

        return (
            <List>
                {items}
            </List>
        )
    }
}