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
      
      updateText = (event) => {
        this.setState({
          [event.currentTarget.name]: event.currentTarget.value
        });
      }
      
      getState = (e, type) => {
        let rect = this.imageRef.getBoundingClientRect();
        const xOffset = e.clientX - rect.left;
        const yOffset = e.clientY - rect.top;
        let stateObject = {};
        if (type === "bottom") {
          stateObject = {
            isBottomDragging: true,
            isTopDragging: false,
            bottomX: `${xOffset}px`,
            bottomY: `${yOffset}px`
          }
        } else if (type === "top") {
          stateObject = {
            isTopDragging: true,
            isBottomDragging: false,
            topX: `${xOffset}px`,
            topY: `${yOffset}px`
          }
        }
        return stateObject;
      }
      handleMouseDown = (e, type) => {
        const stateObj = this.getStateObj(e, type)
        document.addEventListener('mousemove', (event) => this.handleMouseMove(event, type))
        this.setState({...stateObj})
    }
    handleMouseMove = (e, type) => {
        if (this.state.isTopDragging || this.state.isBottomDragging) {
            let stateObj = {};
            if (type === "bottom" && this.state.isBottomDragging) {
              stateObj = this.getStateObj(e, type);
            } else if (type === "top" && this.state.isTopDragging){
              stateObj = this.getStateObj(e, type);
            }
            this.setState({
              ...stateObj
            });
          }
    }
}
