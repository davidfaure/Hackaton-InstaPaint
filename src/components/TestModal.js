import React from 'react';
import ReactDOM from 'react-dom'
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import './TestModal.css'
import Like from './Like'
import CommentBox from './AddComment'


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class TestModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div style={styles} className="Container">
        <button onClick={this.onOpenModal}>See the webcam</button>
        <Modal className="modal" open={open} onClose={this.onCloseModal}>
          <div className="containerModal">
             <div className="Image">
    {/* <p>{this.props.title}</p> */}
                    <iframe className="videoDetails" src={ this.props.player}/>
             </div>
             <div className="ContentConatiner">
                 <div className="blockInfo">
                        <div className="painterPicture">
                        <img className="vignetteSpot" src={this.props.image} alt="hg"/>
                        </div>
                        <div className="caption">
                            <p className="painterName"></p>
                        <p className="city">{this.props.city}{", "}{this.props.country}</p>
                          
                        </div>
                      

                 </div>
                 <hr  className="hrLine"/>
         
                 <div className="blockComment">
                     
               
                      <div className="blockLike">
                         <Like />
                     
                      </div>
                      <div className="blockAddComment">
                        <div className="textArea">
                        <CommentBox />
                      </div>   
                     
                 </div>
                 </div>
             </div>



          </div>
        </Modal>
      </div>
    );
  }
}


    
  
export default TestModal;