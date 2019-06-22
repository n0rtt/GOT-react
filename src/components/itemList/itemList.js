import React, {Component} from 'react';
import styled from 'styled-components'
import gotService from '../services/gotService'
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const List = styled.ul`
        cursor: pointer;
    `
export default class ItemList extends Component {

    gotService = new gotService()

    state = {
        charList: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList,
                    loading: false
                })
            })
    }

    componentDidCatch() {
        this.setState({
            error: true,
            loading: false
        })
    }

    renderItems(arr) {
        return arr.map((item) => {

            const id = item.url.split('/').pop()
        
            return (
                <li 
                key={id}
                className="list-group-item"
                onClick={() => this.props.onCharSelected(id)}>
                    {item.name}
                </li>
            )
        })
    }

    render() {

        const {charList, error, loading} = this.state

        if (error) {
            return <ErrorMessage/>
        }

        if (loading) {
            return <Spinner />
        }

        const items = this.renderItems(charList)

        return (
            <List>
               {items}
            </List>
        )
    }
}