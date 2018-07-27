/*
TITLE: Explanation on Block
*/

import * as React from 'react'
import { Slide, Heading, List, ListItem, Image, Appear, CodePane } from 'spectacle'
import { images } from '../images'

export default (
    // @ts-ignore
    <div hasSlideChildren>
        <Slide transition={['fade']} bgColor="quarternary" textColor="white">
            <Heading size={2} textColor="white" caps>
                Block
            </Heading>
            <Image margin="10vh auto" src={images.block} />
            <List>
                <Appear>
                    <ListItem>Store a block of data in a certain time</ListItem>
                </Appear>
                <Appear>
                    <ListItem>All blocks data are immutable</ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide transition={['fade']} bgColor="quarternary" textColor="white">
            <Heading size={2} textColor="white" caps>
                Block
            </Heading>
            <CodePane
                textSize="1.2rem"
                lang="typescript"
                margin="10px auto"
                source={require('!raw-loader!../assets/code/block.interface.ts')}
            />
        </Slide>
        <Slide transition={['fade']} bgColor="quarternary" textColor="white">
            <CodePane
                textSize="1.2rem"
                lang="typescript"
                margin="10px auto"
                source={require('!raw-loader!../assets/code/block.ts')}
            />
        </Slide>
    </div>
)
