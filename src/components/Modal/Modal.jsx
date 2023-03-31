import React from "react";
import Close from "../../svg/Close";
import * as Styled from "./Modal.styled";

const Modal = ({ openModal, setOpenModal }) => {
  return (
    <>
      <Styled.ModalBlock openModal={openModal}>
        <Styled.Modal>
          <Styled.ModalContent>
            <div>
              <Styled.ButtonClose onClick={() => setOpenModal(false)}>
                <Close/>
              </Styled.ButtonClose>
            </div>
            <h2>
              Какая-то форма
              <br /> Введите в нее что-нибудь
            </h2>
            <Styled.CustomForm>
              <Styled.CustomInput
                type="text"
                placeholder="Введите что-нибудь"
              />
              <Styled.CustomInput
                type="text"
                placeholder="Введите что-нибудь"
              />
              <Styled.CustomInput
                type="text"
                placeholder="Введите что-нибудь"
              />
              <Styled.CustomInput
                type="text"
                placeholder="Введите что-нибудь"
              />
              <Styled.CustomCheckboxBlock>
                <Styled.CustomCheckbox type="checkbox" />
                <p> Этот чек бокс нажимайте</p>
              </Styled.CustomCheckboxBlock>
              <Styled.CustomCheckboxBlock>
                <Styled.CustomCheckbox type="checkbox" />
                <p> А этот нет</p>
              </Styled.CustomCheckboxBlock>
              <button type="submit">После заполнения нажмите</button>
            </Styled.CustomForm>
          </Styled.ModalContent>
        </Styled.Modal>
      </Styled.ModalBlock>
    </>
  );
};

export default Modal;
