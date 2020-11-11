import React from 'react';
import RadioInput from './RadioInput';
import CheckBox from './CheckBox';

class PizzaKit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [
        { id: 0, value: "30cm", isChecked: true, price: 200 },
        { id: 1, value: "35cm", isChecked: false, price: 250 }],
      bases: [
        { id: 0, value: "Тонкое", isChecked: true, price: 0 },
        { id: 1, value: "Пышное", isChecked: false, price: 0 }],
      sauces: [
        { id: 0, value: "Томатный", isChecked: true, price: 0 },
        { id: 1, value: "Белый", isChecked: false, price: 0 },
        { id: 2, value: "Острый", isChecked: false, price: 0 }],
      cheeses: [
        { id: 0, value: "Моцарелла", isChecked: false, price: 29 },
        { id: 1, value: "Чеддер", isChecked: false, price: 29 },
        { id: 2, value: "Дор Блю", isChecked: false, price: 29 }
      ],
      vegetables: [
        { id: 0, value: "Помидор", isChecked: false, price: 29 },
        { id: 1, value: "Грибы", isChecked: false, price: 29 },
        { id: 2, value: "Перец", isChecked: false, price: 29 },
        { id: 3, value: "Ананасы", isChecked: false, price: 29 },
        { id: 4, value: "Оливки", isChecked: false, price: 29 },
        { id: 5, value: "Лук", isChecked: false, price: 29 },
        { id: 6, value: "Брокколи", isChecked: false, price: 29 }
      ],
      meats: [
        { id: 0, value: "Бекон", isChecked: false, price: 29 },
        { id: 1, value: "Пепперони", isChecked: false, price: 29 },
        { id: 2, value: "Ветчина", isChecked: false, price: 29 },
        { id: 3, value: "Курица", isChecked: false, price: 29 },
        { id: 4, value: "Салями", isChecked: false, price: 29 }
      ],
      totalPrice: [0]
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

    var totalPrice = 0;
    let items_state = this.state;

    // Iterating through object of objects

    Object.keys(items_state).forEach(key => {
      console.log("key ", key, "value ", items_state[key])
      items_state[key].forEach(item => {
        if (item.isChecked) {
          totalPrice += item.price;
        }
      })
    })

    this.setState({ totalPrice: [totalPrice] })
    console.log("Total price: ", totalPrice);
  }

  render() {
    let button;

    if (this.state.totalPrice[0] === 0) {
      button = <button type="submit">Заказать за 200 руб.</button>;
    } else {
      button = <button type="submit">Заказать за {this.state.totalPrice[0]} руб.</button>;
    }

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
                this.state.sauces.map((sauce) => {
                  return (<RadioInput handleItemChange={this.handleItemChange} name="sauces" {...sauce} />)
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
          {button}
        </form>
      </div>
    );
  }
}

export default PizzaKit;