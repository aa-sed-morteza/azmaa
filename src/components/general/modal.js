import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ isShowing, hide ,children,title }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModaContainer >
            <div className="modal-overlay"  />
            <div
              className="modal-wrapper"
              aria-modal
              aria-hidden
              tabIndex={-1}
              role="dialog"
              onClick={hide}
            >
             
            </div>
            <div className="modal">
                <div className="modal-header">
                    <h2>{title}</h2>
                  <button
                    type="button"
                    className="modal-close-button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
               {children}
              </div>
          </ModaContainer>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;

const ModaContainer = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
  }

  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    margin:auto;
  }

  .modal {
    width:73%;
    z-index: 1200;
    background: #FFFFFF;
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    margin: 1.75rem auto;
    border-radius: 4px;
    max-width: 500px;
    padding: 4.186vw 4.651vw;
    @media(min-width:480px){
      max-width:none;
      width:30%;
    }
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    margin-bottom:20px;
    h2{
        color: #707070;
        font-weight:400;
        font-size:4.651vw;
        margin:0;
        @media(min-width:480px){
          font-size:1.458vw;
        }
    }
  }

  .modal-close-button {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    opacity: 0.3;
    cursor: pointer;
    border: none;
    @media(min-width:480px){
      font-size:1.563vw;
    }
  }

  button {
    font-size: 0.9rem;
    font-weight: 700;
    border: none;
    border-radius: 3px;
    // padding:0;
    // margin-left: 0.5rem;
   
  }

  .button-default {
    background: #247ba0;
    color: #fff;
  }
`;
