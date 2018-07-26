/*
TITLE: Block & Chain
*/

import * as React from 'react'
import { Slide, Heading, List, ListItem, Image } from 'spectacle'
import { images } from '../images'

export default (
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
)
