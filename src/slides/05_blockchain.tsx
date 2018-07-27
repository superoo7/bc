/*
TITLE: Block & Chain
*/

import * as React from 'react'
import { Slide, Heading, List, ListItem, Image, CodePane } from 'spectacle'
import { images } from '../images'

export default (
    // @ts-ignore
    <div hasSlideChildren>
        <Slide transition={['fade']} bgColor="quarternary" textColor="white">
            <Heading size={2} textColor="white" caps>
                BlockChain
            </Heading>
            <Image margin="10vh auto" src={images.blocknchain} />
            <List>
                <ListItem>Chain is used to hook up blocks</ListItem>
                <ListItem>BlockChain: is a chain of blocks</ListItem>
            </List>
        </Slide>
        <Slide transition={['fade']} bgColor="quarternary" textColor="white">
            <CodePane
                textSize="1.2rem"
                lang="typescript"
                margin="10px auto"
                source={require('!raw-loader!../assets/code/blockchain.ts.1.example')}
            />
        </Slide>
        <Slide transition={['fade']} bgColor="quarternary" textColor="white">
            <CodePane
                textSize="1.2rem"
                lang="typescript"
                margin="10px auto"
                source={require('!raw-loader!../assets/code/blockchain.ts.2.example')}
            />
        </Slide>
        <Slide transition={['fade']} bgColor="quarternary" textColor="white">
            <CodePane
                textSize="1.2rem"
                lang="typescript"
                margin="10px auto"
                source={require('!raw-loader!../assets/code/blockchain.ts.3.example')}
            />
        </Slide>
        <Slide transition={['fade']} bgColor="quarternary" textColor="white">
            <CodePane
                textSize="1.2rem"
                lang="typescript"
                margin="10px auto"
                source={require('!raw-loader!../assets/code/blockchain.ts.4.example')}
            />
        </Slide>
        <Slide transition={['fade']} bgColor="quarternary" textColor="white">
            <CodePane
                textSize="1.2rem"
                lang="typescript"
                margin="10px auto"
                source={require('!raw-loader!../assets/code/blockchain.ts.5.example')}
            />
        </Slide>
        <Slide transition={['fade']} bgColor="quarternary" textColor="white">
            <CodePane
                textSize="1.2rem"
                lang="typescript"
                margin="10px auto"
                source={require('!raw-loader!../assets/code/blockchain.ts.6.example')}
            />
        </Slide>
    </div>
)
