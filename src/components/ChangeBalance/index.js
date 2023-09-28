import { useState } from "react";
import { Modal } from "../Modal";
import Form from "../Form";
import { styled } from "styled-components";

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  background-color: #f7dfe7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.changeBalanceWrapper};
  height: 50px;
`;

export const ChangeBalance = ({ onChange }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <ButtonWrapper>
      <Button onClick={() => setOpenModal(true)}>Change the balance</Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Form
          onChange={onChange}
          onCloseFormModal={() => setOpenModal(false)}
        />
      </Modal>
    </ButtonWrapper>
  );
};
