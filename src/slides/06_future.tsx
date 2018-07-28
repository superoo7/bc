/*
TITLE: What is Blockchain?
*/

import * as React from 'react'
import { Image, Slide, Heading, Appear, List, ListItem } from 'spectacle'

import styled from 'styled-components'
import { images } from '../images'

const CoinImg = styled.img`
    width: 20vw;
    margin: 10px;
    height: 20vw;
`

export default (
    // @ts-ignore
    <div hasSlideChildren>
        <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
                Future of Blockchain
            </Heading>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
                Proof of Authority
            </Heading>
            <CoinImg src="https://pbs.twimg.com/profile_images/626149701189042177/LWpxKEv3_400x400.png" />
            <List textColor="blue2">
                <Appear>
                    <ListItem>
                        Transactions and blocks are validated by <strong>validators</strong>
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem>Validators is also known as sealers.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>full control over which nodes can seal blocks (mine) on your network</ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
                Proof of Stake
            </Heading>
            <Image height={500} src={images.pos} />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
                Delegated Proof of Stake
            </Heading>
            {/* tslint:disable-next-line:max-line-length */}
            <CoinImg src="data:image/png;base64,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" />
            <List textColor="blue2">
                <Appear>
                    <ListItem>Decentralized governance.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Users delegate to witness.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Witness responsible to make the network flows.</ListItem>
                </Appear>
            </List>
        </Slide>
    </div>
)
