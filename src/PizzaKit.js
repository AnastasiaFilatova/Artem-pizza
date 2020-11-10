import React from 'react';
import RadioInput from './RadioInput';
import CheckBox from './CheckBox';

class PizzaKit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [
        { id: 0, value: "30cm", isChecked: true },
        { id: 1, value: "35cm", isChecked: false }],
      bases:  [
        { id: 0, value:  "Тонкое", isChecked: true },
        { id: 1, value: "Пышное", isChecked: false }],
      sauses: [
        { id: 0, value:  "Томатный", isChecked: true },
        { id: 1, value: "Белый", isChecked: false },
        { id: 2, value: "Острый", isChecked: false }],
      cheeses: [
        { id: 0, value: "Моцарелла", isChecked: false },
        { id: 1, value: "Чеддер", isChecked: false },
        { id: 2, value: "Дор Блю", isChecked: false }
      ],
      vegetables: [
        { id: 0, value: "Помидор", isChecked: false },
        { id: 1, value: "Грибы", isChecked: false },
        { id: 2, value: "Перец", isChecked: false }]
    };

    this.handleItemChange = this.handleItemChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleItemChange = (event) => {
    let checked_item_name = event.target.name;
    let items_state = this.state[checked_item_name];

    items_state.forEach(item => {
      if (item.value === event.target.value) {
        item.isChecked = event.target.checked;
      }
      else {
        if (event.target.type === "radio") {
          item.isChecked = false;
        }
      }
      this.setState({
        [checked_item_name]: items_state
      })
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="PizzaKit">
        <form onSubmit={this.onSubmit}>
          <div className="radio">
            <label>
              Размер
              {
                  this.state.sizes.map((size) => {
                    return (<RadioInput handleItemChange={this.handleItemChange} name="sizes" {...size} />)
                  })
                }
              </label>
          </div>
          <div className="radio">
            <label>
              Тесто
              {
                  this.state.bases.map((base) => {
                    return (<RadioInput handleItemChange={this.handleItemChange} name="bases" {...base} />)
                  })
                }
              </label>
          </div>
          <div className="radio">
            <label>
              Соус
              {
                  this.state.sauses.map((sause) => {
                    return (<RadioInput handleItemChange={this.handleItemChange} name="sauses" {...sause} />)
                  })
                }
              </label>
            <div className="checkbox">
              <label>
                Сыр
                {
                  this.state.cheeses.map((cheese) => {
                    return (<CheckBox onCheckBoxChange={this.onCheckBoxChange} name="cheeses" {...cheese} />)
                  })
                }
              </label>
            </div>
            <div className="checkbox">
              <label>
                Овощи
                {
                  this.state.vegetables.map((vegetable) => {
                    return (<CheckBox onCheckBoxChange={this.onCheckBoxChange} name="vegetables" {...vegetable} />)
                  })
                }
              </label>
            </div>
          </div>
          <button type="submit">Заказать за {'price here'}!</button>
        </form>
      </div>
    );
  }
}

export default PizzaKit;