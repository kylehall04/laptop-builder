import React from 'react';
import slugify from 'slugify';

export default class Feature extends React.Component {
  render() {
    const options = this.props.features[this.props.feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(this.props.feature)}
            checked={item.name === this.props.selected[this.props.feature].name}
            onChange={(e) =>
              this.props.handleItemChange(this.props.feature, item)
            }
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });

    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}
