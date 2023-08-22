import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 5px;
    margin-bottom: 10px;
`;
Wrapper.displayName = 'TransactionWrapper'

export const MyForm = styled.form`
    display: flex;
    width:100%;
`;
MyForm.displayName = 'MyForm';

export const Input = styled.input`
    border-radius: 3px;
    padding: 0 5px;
    width: 148px;
    margin-bottom: 3px;
    border: 1px solid #dbdbdb;
    height: 40px;
    outline: none;
`
Input.displayName = 'Input';

export const Row = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
`
Row.displayName = 'Row'

export const Button = styled.button`
    border: 1px solid #dbdbdb;
    height: 40px;
    border-radius: 3px;
    padding: 0 21px;
    box-sizing: border-box;
    background-color: #e0e0e0;
    color: rgba(0, 0, 0, 0.87);
    font-size: 18px;
    outline: none;
    width: 160px;
    margin-bottom: 3px;

    &:hover {
        cursor: pointer;
    }
`
Button.displayName = 'Button';

export const Comment = styled.textarea`
    min-height: 40px;
    line-height: 1.5;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 3px;
    width: 160px;
    margin-bottom: 3px;
    height: 40px;
    border: 1px solid #dbdbdb;
    outline: none;
`;
Comment.displayName = 'Comment'
