/*
TITLE: Introduction
*/

import * as React from 'react'
import { Slide, Heading, Image } from 'spectacle'
import { images } from '../images'

export default (
    <Slide transition={['fade']} bgColor="secondary">
        <Heading textColor="white" caps bold fit>
            Blockchain 101
        </Heading>
        <Image width="50vw" margin="10vh auto" src={images.blockchainn} />
        <Heading size={6} textColor="blue">
            Presented by: Johnson Lai
        </Heading>
    </Slide>
)
