import React, { Component } from 'react'
import ItemList from '../itemList';
import CharDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage'
import gotService from '../services/gotService'
import RowBlock from '../rowBlock'
import RandomCharPage from './randomCharPage'

export default class CharacterPage extends Component {

    gotService = new gotService()

    state = {
        selectedChar: null,
        error: false,
        selection: 'characters'
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({ name, gender }) => `${name} (${gender})`} />
        )

        const charDetails = (
            <CharDetails 
                itemId={this.state.selectedChar} 
                getItem={this.gotService.getCharacter} 
                selection={this.state.selection}>
                    <Field field='gender' label='Gender'/>
                    <Field field='born' label='Born'/>
                    <Field field='died' label='Died'/>
                    <Field field='culture' label='Culture'/>
            </CharDetails>
        )

        return (
            <>
                <RandomCharPage/>
                <RowBlock left={itemList} right={charDetails} />
            </>
        )
    }
}