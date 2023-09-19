import { useState } from "react";
import { PropTypes } from "prop-types";
import { Wrapper, Input, Row, Button, Comment, MyForm } from "./styles";
import {FormattedMessage} from 'react-intl';

const Form = (props) => {
  
    const [form, setForm] = useState({
      value: "",
      date: new Date().toISOString().substring(0,10),
      comment: "",
    })
  
  const onChange = (e) => {
    console.log('onchange')
    const { value, name } = e.target;

    
    setForm({
      ...form,
      [name]: value,
    })
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onChange(form);
    setForm({
      ...form,
      value: "",
      comment: "",
    });

    props.onCloseFormModal();
  };

  
    return (
      <Wrapper>
        <FormattedMessage id='hello'/>
        <MyForm onSubmit={onSubmit}>
          <Row>
            <Input
              type="date"
              name="date"
              value={form.value}
              onChange={onChange}
            />
            <Input
              name="value"
              type="number"
              placeholder="Summ"
              value={form.value}
              onChange={onChange}
            />
            <Button>
            <FormattedMessage id='button.buttonSave'/>
            </Button>
            <Comment
              name="comment"
              value={form.comment}
              onChange={onChange}
            />
          </Row>
        </MyForm>
      </Wrapper>
    );
  
}

Form.propTypesropTypes = {
  onChange: PropTypes.func,
};

export default Form;
