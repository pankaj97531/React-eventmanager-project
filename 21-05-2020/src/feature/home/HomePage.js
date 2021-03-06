import React from 'react'
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react'

const HomePage = ({history}) => {
    return (
        <Segment inverted textAlign="center" vertical className="masthead">
            <Container text>
                <Header as="h1" inverted>
                    <Image size="massive" src="assets/images/logo.png" alt="logo" style={{marginBottom:12}} />Re-Events
                </Header>
                <Button size="huge" inverted onClick={()=>history.push('/events')}>
                    Get Started
                    <Icon name="arrow right" inverted />
                </Button>
            </Container>
        </Segment>
    )
}

export default HomePage
