/*
TITLE: Block & Chain
*/

import * as React from 'react'
import { Slide, Heading, List, ListItem, Image, Appear } from 'spectacle'
import { images } from '../images'

export default (
    // @ts-ignore
    <div hasSlideChildren>
        <Slide transition={['fade']} bgColor="secondary" textColor="white">
            <Heading size={2} textColor="white" caps>
                Proof Of Work
            </Heading>
            <Image margin="10vh auto" src={images.blocknchain} />
            <List>
                <Appear>
                    <ListItem>Consensus Algorithm used by Bitcoin and Ethereum.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>By setting certain amount of difficulty for the computer to verify.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Hard to proof but easy to verify.</ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="white">
            <Heading size={2} textColor="white" caps>
                Proof Of Work
            </Heading>
            <iframe
                style={{ width: '80vw', height: '50vh' }}
                src="https://www.youtube.com/embed/-srLBljsdlM"
                // @ts-ignore
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
            />
        </Slide>
    </div>
)
