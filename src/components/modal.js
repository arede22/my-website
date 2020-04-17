import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '../styles';
const { colors, fontSizes, fonts, displays } = theme;

const Modal = (props) => (
  // const { trigger, img, content, close } = this.props
  //
  // <img id="map" src="../static/portfolio/map.png" alt="map" height="50%" width="50%" vspace="10" style={displays.centerPic} />

  // <div id="popMap" className="modal">
  //   <span className="close" onClick="document.getElementById('popMap').style.display='none'">&times;</span>
  //   <img className="modal-content" id="img02" style={{maxHeight: '500px;'}}/>
  // </div>
  <div>
    <p> MODAL </p>
  </div>
);
Modal.propTypes = {
  trigger: PropTypes.string,
  img: PropTypes.string,
  content: PropTypes.string,
  close: PropTypes.number
};

export default Modal
