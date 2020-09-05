import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component {
    static contextType = LanguageContext;

    onLanguageChange = (language) => {
        this.context.onLanguageChange(language);
    }

    render() {
        return (
            <div>
                Select a language:&nbsp;
                <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
            </div>
        );
    }
}

export default LanguageSelector;