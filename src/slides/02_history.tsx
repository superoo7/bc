import * as React from 'react'
import { Slide, Heading, Appear, List, ListItem, CodePane } from 'spectacle'

import styled from 'styled-components'
import { images } from '../images'

const CoinImg = styled.img`
    width: 20vw;
    margin: 10px;
    height: 20vw;
`

const Wrapper = styled.div`
    background-color: rgb(0, 209, 215, 0.2);
    padding: 10px;
`

const StyledHeading = styled(Heading)`
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`

// source: https://codepen.io/bloom-dan/pen/dpbWRz
const StyledButton = styled.button`
    &:after,
    &:before {
        box-sizing: border-box;
    }
    &:focus {
        outline: none;
    }
    box-sizing: border-box;
    overflow: visible;
    border: 0;
    padding: 0;
    margin: 1.8rem;
    font-family: 'Bungee Shade', sans-serif;
    height: 80px;
    line-height: 65px;
    display: inline-block;
    letter-spacing: 1px;
    position: relative;
    font-size: 1.35rem;
    transition: opacity 0.3s, z-index 0.3s step-end, -webkit-transform 0.3s;
    transition: opacity 0.3s, z-index 0.3s step-end, transform 0.3s;
    transition: opacity 0.3s, z-index 0.3s step-end, transform 0.3s, -webkit-transform 0.3s;
    z-index: 1;
    background-color: transparent;
    cursor: pointer;
    width: 155px;
    height: 48px;
    line-height: 38px;
    a {
        display: block;
        position: relative;
        z-index: 2;
        border: 5px solid;
        border-color: #393939;
        background: white;
        color: #393939;
    }
    &:after,
    &:before {
        background-image: linear-gradient(
            135deg,
            transparent 0,
            transparent 5px,
            #393939 5px,
            #393939 10px,
            transparent 10px
        );
    }
    &:hover:before {
        max-height: calc(100% - 10px);
    }
    &:after {
        width: calc(100% - 4px);
        height: 8px;
        left: -10px;
        bottom: -9px;
        background-size: 15px 8px;
        background-repeat: repeat-x;
    }
    &:after,
    &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 1;
        transition: max-height 0.3s, width 0.3s, -webkit-transform 0.3s;
        transition: transform 0.3s, max-height 0.3s, width 0.3s;
        transition: transform 0.3s, max-height 0.3s, width 0.3s, -webkit-transform 0.3s;
    }
    &:hover {
        -webkit-transform: translate(-12px, 12px);
        -ms-transform: translate(-12px, 12px);
        transform: translate(-12px, 12px);
        z-index: 3;
    }
    &:hover:after,
    &:hover:before {
        -webkit-transform: translate(12px, -12px);
        -ms-transform: translate(12px, -12px);
        transform: translate(12px, -12px);
    }
    &:before {
        width: 8px;
        max-height: calc(100% - 5px);
        height: 100%;
        left: -12px;
        bottom: -5px;
        background-size: 8px 15px;
        background-repeat: repeat-y;
        background-position: 0 100%;
    }
`

export default (
    // @ts-ignore
    <div hasSlideChildren>
        <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
                History of Blockchain
            </Heading>
            {/* tslint:disable-next-line:max-line-length */}
            <CoinImg src="data:image/png;base64,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" />
            <CoinImg src="https://pbs.twimg.com/profile_images/626149701189042177/LWpxKEv3_400x400.png" />
        </Slide>
        <Slide transition={['zoom']} bgImage="https://cdn-images-1.medium.com/max/1440/1*b-NUKOr9seX1lun0TIPMIQ.jpeg">
            <Wrapper>
                <Appear>
                    <StyledHeading size={1} textColor="white" bold>
                        November 2008
                    </StyledHeading>
                </Appear>
                <Appear>
                    <StyledHeading size={4} textColor="white">
                        Satoshi Nakamoto
                    </StyledHeading>
                </Appear>
            </Wrapper>
        </Slide>
        <Slide bgImage={images.btc1} bgColor="white">
            <StyledButton>
                <a href="https://bitcoin.org/bitcoin.pdf" target="_blank">
                    WhitePaper
                </a>
            </StyledButton>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
                Problem Solve
            </Heading>
            {/* tslint:disable-next-line:max-line-length */}
            <CoinImg src="data:image/png;base64,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" />
            <List>
                <Appear>
                    <ListItem>Completely non-reversible transactions.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Secure, Immutable, and Decentralized database.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Remove the need of trust.</ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="white">
                Drawbacks
            </Heading>
            {/* tslint:disable-next-line:max-line-length */}
            <CoinImg src="data:image/png;base64,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" />
            <List>
                <Appear>
                    <ListItem>Consume a lot of electricity.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>High cost of transaction fee.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Does not have full support of smart contract.</ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide>
            <Heading size={1} caps lineHeight={1} textColor="white">
                Ethereum
            </Heading>
            <Heading size={4}>July 2015</Heading>
            <CoinImg src="https://pbs.twimg.com/profile_images/626149701189042177/LWpxKEv3_400x400.png" />
        </Slide>
        <Slide>
            <Heading size={1} caps lineHeight={1} textColor="white">
                Solidity
            </Heading>
            {/* tslint:disable-next-line:max-line-length */}
            <CoinImg src="data:image/png;base64,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" />
            <List>
                <Appear>
                    <ListItem>High level language.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Write smart contract on top of ethereum virtual network.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Contract-oriented programming language.</ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
                Sample Code
            </Heading>
            <CodePane textSize="1.2rem" margin="10px auto" source={require('!raw-loader!../assets/code/sample.sol')} />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
                Problem Solve
            </Heading>
            <CoinImg src="https://pbs.twimg.com/profile_images/626149701189042177/LWpxKEv3_400x400.png" />
            <List>
                <Appear>
                    <ListItem>Support Smart Contract.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>A lot of usable plugins.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Create decentralized app with ease.</ListItem>
                </Appear>
            </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
                Drawbacks
            </Heading>
            <CoinImg src="https://pbs.twimg.com/profile_images/626149701189042177/LWpxKEv3_400x400.png" />
            <List>
                <Appear>
                    <ListItem>High cost of transaction fee.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Scalability.</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Blockchain sync issue.</ListItem>
                </Appear>
            </List>
        </Slide>
    </div>
)
