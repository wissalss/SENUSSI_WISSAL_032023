import React from 'react';
import {useState} from "react"
import {Modal} from "wissal-jquery-modal/dist/Modal"

function App() {
    const [displayModal, setDisplayModal] = useState(false)
    const modalStyle = {
      "background": "rgba(236, 222, 222, 0.5)",
      "margin": "auto",
      "borderRadius": "10px",
      "maxWidth": "400px",
      "width": "80%",
      "padding": "0.5rem",
      "border": "1px solid white",
    }
  
    const modalHeaderStyle = {
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center",
      "margin": "0.2rem 0.5rem 1.5rem",
    }
  
    const titleStyle={
      "color": "#000",
    }
  
    const modalBodyStyle = {
      "fontSize": "20px",
      "color":"#000",
      "textAlign": "center",
    }
  
    const modalFooterStyle = {
      "display": "flex",
      "justifyContent": "center",
      "alignItems": "center",
      "marginBottom": "1rem",
      "marginTop": "2rem",
    }
  
      const CloseButtonStyle = {
        "fontSize": "1rem",
        "fontWeight": "700",
        "color": "rgb(39, 39, 39)",
        "cursor": "pointer",
        "border": "none",
        "background": "transparent",
      }
  
      const footerButton1Style = {
        "background": "#fff",
        "color": "green",
        "width":"20%",
        "cursor": "pointer",
        "padding": "0.5rem",
        "margin": "0.5rem",
        "border": "1px solid rgb(39, 39, 39)",
        "borderRadius": "5px"
      }
  
      const footerButton2Style = {
        "background": "#fff",
        "color": "red",
        "width":"50%",
        "cursor": "pointer",
        "padding": "0.5rem",
        "margin": "0.5rem",
        "border": "1px solid rgb(39, 39, 39)",
        "borderRadius": "5px"
      }
  
    return (
      <div className="App">
        <button className='modal-toggle' onClick={() => setDisplayModal(true)}>
          show modal
        </button>
        <Modal modalStyle={modalStyle} modalHeaderStyle={modalHeaderStyle} titleStyle={titleStyle} modalBodyStyle={modalBodyStyle} modalFooterStyle={modalFooterStyle} CloseButtonStyle={CloseButtonStyle} footerButton1Style={footerButton1Style} footerButton2Style={footerButton2Style} title="Enter your modal title here" message="Hello, your message here" showModal={displayModal} hideModal={() => setDisplayModal(false)} buttonText1='Ok' buttonText2='Cancel'/>
      </div>
    );
  }

export default App