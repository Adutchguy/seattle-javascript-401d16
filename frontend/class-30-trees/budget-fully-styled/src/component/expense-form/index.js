import './_expense-form.scss'
import React from 'react'

class ExpenseForm extends React.Component {
  constructor(props){
    super(props)
    let title = props.expense ? props.expense.title : ''
    let price = props.expense ? props.expense.price : 0

    this.state = { title, price }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // hooks
  // methods
  handleChange(e){
    let {name, value, type} = e.target

    if(type === 'number'){
      try {
        this.setState({
          [name]: Number(value)
        })
      } catch (err) {
        console.error(err)
      }
    } else {
      this.setState({
        [name]: value,
      })
    }

  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render(){
    return (
      <form 
        className='expense-form'
        onSubmit={this.handleSubmit}>

        <input 
          name='title'
          type='text' 
          placeholder='expense'
          value={this.state.title}
          onChange={this.handleChange}
          />

        <input 
          name='price'
          type='number' 
          min='0'
          step='any'
          value={this.state.price}
          onChange={this.handleChange}
          />

        <button type='submit'> {this.props.submitTitle} </button>
      </form>
    )
  }
}


export default ExpenseForm










