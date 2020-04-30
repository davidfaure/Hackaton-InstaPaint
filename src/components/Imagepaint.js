import React, { useState } from 'react';
import TestModal from './TestModal'
import ReactDOM from 'react-dom'
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import './TestModal.css'
import Like from './Like'
import CommentBox from './AddComment'
import './Imagepaint.css'


const Imagepaint = (props) => {
        // const [webcam, setWebcam] = useState([])
        // useState(props.webcamState) 
        console.log(props.webcamState)
    return(
            <div className="ContainerModal">
                <div className="Image">
                    <img src={props.image} alt="icon"/>
                </div>
                <div className="Informations">
                    <h2><b>{props.title}</b></h2>
                    <p><b>Pays</b> : {props.country}</p>
                    <p><b>Région</b> : {props.region}</p>
                    {/* <iframe src={props.player} alt="campreview"/> */}
                    <small><a href={props.wikipedia}>Wikipedia : {props.region}</a></small>
                </div>
                <div className="ButtonModal">
                        <TestModal 
                        title={props.title}
                        image={props.image}
                        city={props.city}
                        country={props.country}
                        player={props.player}
                        />
                    </div>
            </div>
    );
}


export default Imagepaint;