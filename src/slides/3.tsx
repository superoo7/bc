/*
TITLE: Explanation on Block
*/

import * as React from 'react'
import { Slide, Heading, List, ListItem, Image, Appear } from 'spectacle'
import { images } from '../images'

export default (
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
)
