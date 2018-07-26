/*
TITLE: Block class Code #2
*/

import * as React from 'react'
import { Slide, CodePane } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="quarternary" textColor="white">
        <CodePane
            textSize="1.2rem"
            lang="typescript"
            margin="10px auto"
            source={require('!raw-loader!../assets/code/block.ts')}
        />
    </Slide>
)
