import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import "./HomepageStyle.css";

const Homepage = () => {
  const [openModal, setOpenModal] = useState(false);


  return (
    <>
      <div className="privetstvie">
        <h1>
          И так. Начинаем наш интерактив. Это главная страница. Тут я вас
          попрошу выполнить несколько действий после которых попрошу перейти на
          Page2.
        </h1>
      </div>
      <div>
        <h2>
          Задание №1 <br /> Тут будет расположенно несколько кнопок. Нажмите
          только на 1 и 3
        </h2>
        <div className="button-block">
          <button className="homepage-buttons" onClick={() => setOpenModal(true)}>
            Кнопка 1
          </button>
          <button className="homepage-buttons">Кнопка 2</button>
          <button className="homepage-buttons">Кнопка 3</button>
        </div>
        <Modal openModal={openModal} setOpenModal={setOpenModal} />
        <div>
            <h2>После того кк прокликали покликали кнопки, перейдите на page2</h2>
        </div>
      </div>
    </>
  );
};

export default Homepage;
