/*
TITLE: Block class Code #1
*/

import * as React from 'react'
import { Slide, Heading, CodePane } from 'spectacle'

export default (
    // @ts-ignore
    <div hasSlideChildren>
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
