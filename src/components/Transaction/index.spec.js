import Transaction from ".";
import {shallow }from 'enzyme'

describe('Transaction component', () => {
  it('should show transaction', () => {
    const props = {
      tran: {
        value: 23,
        omment: 'test',
        date: '01.01.2001'
      }
    }
    const sut = shallow(<Transaction {...props}/>)
    expect (sut).toMatchSnapshot()
  })
  //test()
})