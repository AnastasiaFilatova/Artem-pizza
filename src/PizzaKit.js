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
        { id: 2, value: "Перец", isChecked: false },
        { id: 3, value: "Ананасы", isChecked: false },
        { id: 4, value: "Оливки", isChecked: false },
        { id: 5, value: "Лук", isChecked: false },
        { id: 6, value: "Брокколи", isChecked: false }
      ],
      meats: [
        { id: 0, value: "Бекон", isChecked: false },
        { id: 1, value: "Пепперони", isChecked: false },
        { id: 2, value: "Ветчина", isChecked: false },
        { id: 3, value: "Курица", isChecked: false },
        { id: 4, value: "Салями", isChecked: false }
      ]
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
              Выберите соус
              {
                  this.state.sauses.map((sause) => {
                    return (<RadioInput handleItemChange={this.handleItemChange} name="sauses" {...sause} />)
                  })
                }
              </label>
            <div className="checkbox">
              <label>
                Добавьте сыр
                {
                  this.state.cheeses.map((cheese) => {
                    return (<CheckBox handleItemChange={this.handleItemChange} name="cheeses" {...cheese} />)
                  })
                }
              </label>
            </div>
            <div className="checkbox">
              <label>
              Добавьте овощи
                {
                  this.state.vegetables.map((vegetable) => {
                    return (<CheckBox handleItemChange={this.handleItemChange} name="vegetables" {...vegetable} />)
                  })
                }
              </label>
            </div>
            <div className="checkbox">
              <label>
              Добавьте мясо
                {
                  this.state.meats.map((meat) => {
                    return (<CheckBox handleItemChange={this.handleItemChange} name="meats" {...meat} />)
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