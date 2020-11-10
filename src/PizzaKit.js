import React from 'react';
import CheckBox from './CheckBox';

class PizzaKit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "30cm",
      base: "Тонкое",
      sause: "Томатный",
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
    this.onSizeChange = this.onSizeChange.bind(this);
    this.onBaseChange = this.onBaseChange.bind(this);
    this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSizeChange = (event) => {
    //alert(event.target.value);
    this.setState({
      size: event.target.value
    });
  };

  onBaseChange = (event) => {
    //alert(event.target.value);
    this.setState({
      base: event.target.value
    });
  };

  onSauseChange = (event) => {
    //alert(event.target.value);
    this.setState({
      sause: event.target.value
    });
  };

  onCheckBoxChange = (event) => {
    let checked_item_name = event.target.name;
    let items_state = this.state[checked_item_name];

    items_state.forEach(item => {
      if (item.value === event.target.value)
        item.isChecked = event.target.checked
    })

    this.setState({
      [checked_item_name]: items_state
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
                <input
                type="radio"
                value="30cm"
                checked={this.state.size === "30cm"}
                onChange={this.onSizeChange}
              />
                30cm
                <input
                type="radio"
                value="35cm"
                checked={this.state.size === "35cm"}
                onChange={this.onSizeChange}
              />
                35cm
              </label>
          </div>
          <div className="radio">
            <label>
              Тесто
                <input
                type="radio"
                value="Тонкое"
                checked={this.state.base === "Тонкое"}
                onChange={this.onBaseChange}
              />
                Тонкое
                <input
                type="radio"
                value="Пышное"
                checked={this.state.base === "Пышное"}
                onChange={this.onBaseChange}
              />
                Пышное
              </label>
          </div>
          <div className="radio">
            <label>
              Соус
                <input
                type="radio"
                value="Томатный"
                checked={this.state.sause === "Томатный"}
                onChange={this.onSauseChange}
              />
                Томатный
                <input
                type="radio"
                value="Белый"
                checked={this.state.sause === "Белый"}
                onChange={this.onSauseChange}
              />
                Белый
                <input
                type="radio"
                value="Острый"
                checked={this.state.sause === "Острый"}
                onChange={this.onSauseChange}
              />
                Острый
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