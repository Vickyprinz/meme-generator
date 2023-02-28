import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';

import API from '../API'

import {saveSvgAsPng, svgAsDataUri} from 'save-svg-as-png';
class MemeForm extends Component {
    state = {
        headerText: "",
        subheaderText: "",
        isDragging: false,
        yOffset: '30%',
        xOffset: '10%'
      }
      
}
