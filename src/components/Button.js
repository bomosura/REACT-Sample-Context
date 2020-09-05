import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {

    renderSubmitText = (language) => {
        switch (language) {
            case 'dutch':
                return 'Voorleggen';
            default:
                return 'Submit';
        };
    }

    renderSubmitButton = (color) => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmitText(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(value) => this.renderSubmitButton(value)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;