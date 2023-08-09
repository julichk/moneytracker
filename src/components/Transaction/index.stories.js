import Transaction from '.';

export default {
  title: 'Example/Transaction',
  component: Transaction,
};

const Template = (args) => <Transaction {...args} />;

export const Income = Template.bind({});
Income.args = {
    tran: {
        comment: 'some income',
        value: 23,
        date: new Date().toISOString().substring(0,10)
    }
};
