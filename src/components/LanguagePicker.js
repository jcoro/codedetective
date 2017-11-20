import React, {Component} from 'react';

class LanguagePicker extends Component {
    render() {
        return (
            <span>
                <div>Code Language</div>
                    <select onChange={e => {this.props.onChange(e.target.value)}}
                            value={this.props.value}>
                            {this.props.options.map(option =>
                                <option value={option} key={option}>
                                    {option}
                                </option>)
                            }
                    </select>
            </span>
        )
    };


}

export default LanguagePicker;