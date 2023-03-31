import styled from "styled-components";

export const ModalBlock = styled.div`
  display: ${(props) => (props.openModal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Modal = styled.div`
z-index: 99999;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    height: 700px;
    width: calc(40%);
`;

export const ModalContent = styled.div`
    display: grid;
`

export const ButtonClose = styled.div`
    width: 25px;
    height: 25px;
    cursor: pointer;
`

export const CustomForm = styled.form`
    display: grid;
`

export const CustomInput = styled.input`
    height: 40px;
    border-radius: 5px;
    margin-bottom: 20px;
    padding-left: 10px;
`


export const CustomCheckboxBlock = styled.div`
    display: flex;

`

export const CustomCheckbox = styled.input`
    margin-top: 17px;
    margin-right: 20px;
    width: 20px;
    height: 20px;
`

