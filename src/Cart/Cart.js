import React from 'react';
// import './Cart.css'
import SummaryOption from './SummaryOption';
import Total from './Total';

export default class Cart extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <SummaryOption
          key={featureHash}
          featureHash={featureHash}
          selectedOption={selectedOption}
          USCurrencyFormat={this.props.USCurrencyFormat}
          feature={feature}
        />
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      </section>
    );
  }
}
