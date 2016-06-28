import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import numeral from 'numeral';

export default class GlobalVarsControl extends React.Component {

  render() {
    const { kexp, krdel, area, onChangeKexp, onChangeKrdel, onChangeArea } = this.props;

    return (
      <div>
        <div id="kexp">
          <span>k<sub>exp</sub> </span>
          <input type="range" min="0" max="1" step="0.1"
                 className="form-control"
                 defaultValue={ kexp }
                 onChange={ e => onChangeKexp(e.target.value) } />
          <span>&nbsp;&nbsp;</span>
          <input type="text" readOnly maxLength="3" size="3"
                 value={ numeral(kexp).format('0.0') } />
        </div>
        <div id="krdel">
          <span>k<sub>rdel</sub> </span>
          <input type="range" min="0" max="1" step="0.1"
                 className="form-control"
                 defaultValue={ krdel }
                 onChange={ e => onChangeKrdel(e.target.value) } />
          <span>&nbsp;&nbsp;</span>
          <input type="text" readOnly maxLength="3" size="3"
                 value={ numeral(krdel).format('0.0') } />
        </div>
        <div id="area" className="pull-right">
          <span>Superficie de referencia (m²) </span>
          <input ref={ (ref) => this.areaEntry = ref }
                 name="areaentry"
                 type="number"
                 lang="es"
                 min="1"
                 step="1"
                 defaultValue={ numeral(area).format('0') }
                 onChange={ e => onChangeArea(e.target.value) } />
        </div>
      </div>
    );
  }

}

