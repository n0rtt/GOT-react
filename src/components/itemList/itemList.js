import React, {Component} from 'react';
import styled from 'styled-components'
import gotService from '../services/gotService'
import Spinner from '../spinner';

const List = styled.ul`
        cursor: pointer;
    `
export default class ItemList extends Component {

    gotService = new gotService()

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                })
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

        const {charList} = this.state

        if (!charList) {
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