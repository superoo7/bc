/*
TITLE: Explanation on Block
*/

import * as React from 'react'
import { Slide, Heading, List, ListItem, Image } from 'spectacle'
import { images } from '../images'

export default (
    <Slide transition={['fade']} bgColor="quarternary" textColor="white">
        <Heading size={2} textColor="white" caps>
            Block
        </Heading>
        <Image margin="10vh auto" src={images.block} />
        <List>
            <ListItem>Store a block of data in a certain time</ListItem>
            <ListItem>All blocks data are immutable</ListItem>
        </List>
    </Slide>
)
