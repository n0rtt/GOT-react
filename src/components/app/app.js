import React, {Component} from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import styled from 'styled-components'

const Button = styled.button`
    padding: 1rem 3rem;
    color: #000;
    margin-bottom: 5rem;
`

export default class App extends Component {

    state = {
        display: true
    }

    hideChar = () => {
        this.setState({
            display: !this.state.display
        })
    }

    render() {

        const {display} = this.state

        const hideChar = display ? <RandomChar /> : null

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {hideChar}
                        </Col>
                        <Col>
                            <Button onClick={this.hideChar}>
                                Click me
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
