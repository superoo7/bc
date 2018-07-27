/*
TITLE: BlockChain class Code #2
*/

import * as React from 'react'
import { Slide, CodePane } from 'spectacle'

export default (
    // @ts-ignore
    <div hasSlideChildren>
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
    </div>
)
