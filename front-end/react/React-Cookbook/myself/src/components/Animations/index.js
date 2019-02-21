import React, {Component} from 'react';
import {fadeIn, bounce} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    fadeIn: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    bounce: {
        animation: 'x 2s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
};

class Animations extends Component {
    render() {
        return (
            <StyleRoot>
                <div className="Animations" style={styles.bounce}>
                    <h1>This text will be animated</h1>
                </div>
            </StyleRoot>
        );
    }
}

export default Animations;
