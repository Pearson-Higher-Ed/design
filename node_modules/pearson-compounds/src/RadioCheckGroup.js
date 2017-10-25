import React, { Component } from 'react';
import PropTypes            from 'prop-types';


class RadioCheckGroup extends Component {

  constructor(props){
    super(props);
    this.state = { checkboxSelectedOptions:[] };

    this.groupHandler = _groupHandler.bind(this);
  }

  render(){

    const { legendText, options, name, inputType, selectedOptions, changeHandler } = this.props;

    return (
          <fieldset className="pe-fieldset">
            <legend className="pe-legend">{legendText}</legend>
            {Object.keys(options).map((opt, i) => {
              return (
                    <div key={`${name}-${opt}-${i}`} className={(inputType === 'radio')?"pe-radio":"pe-checkbox"}>
                      <input id       = {`radiocheck-${name}-${opt}-${i}`}
                             type     = {inputType}
                             name     = {name}
                             value    = {opt}
                             checked  = {selectedOptions.indexOf(opt) > -1}
                             disabled = {(inputType === 'checkbox') ? options[opt].toLowerCase().indexOf('disabled') > -1 : (Object.keys(options).filter(o => options[o] === 'disabled').length > 0) }
                             onChange = {this.groupHandler}
                             />
                      <label htmlFor={`radiocheck-${name}-${opt}-${i}`}>{opt}</label>
                      <span>
                        <svg
                          aria-hidden = "true"
                          focusable   = "false"
                          className   = {inputType==='radio'?"pe-icon--radio-dot":"pe-icon--check-sm-18"}
                          >
                          <use xlinkHref={inputType==='radio'?"#new-notification-9":"#check-sm-18" }></use>
                        </svg>
                      </span>
                    </div>
                  )
              })
            }
          </fieldset>
      )
    }
}

export default RadioCheckGroup;


RadioCheckGroup.propTypes = {
  id              : PropTypes.string.isRequired,
  legendText      : PropTypes.string.isRequired,
  options         : PropTypes.object.isRequired,
  inputType       : PropTypes.string.isRequired,
  inputType       : PropTypes.string.isRequired,
  changeHandler   : PropTypes.func.isRequired,
  name            : PropTypes.string,
  selectedOptions : PropTypes.array
};


function _groupHandler (e) {
    const newSelection                 = e.target.value;
    const { selectedOptions }          = this.props;
    const { inputType, changeHandler } = this.props;

    let newSelectionArray;

    if(selectedOptions.indexOf(newSelection) > -1) {
      newSelectionArray = selectedOptions.filter(s => s !== newSelection)
    } else {
      newSelectionArray = (inputType === 'radio') ? [newSelection] : [...selectedOptions, newSelection];
    }

    this.setState({ selectedOptions: newSelectionArray });

    changeHandler.call(this, newSelectionArray);
}
