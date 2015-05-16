var React = require('react');
var PropTypes = React.PropTypes;
var PrettyPrint = require('../utils/PrettyPrintUtils');

var MyAccountItem = React.createClass({
  propTypes: {
    address: PropTypes.string.isRequired,
    balance: PropTypes.object,
    default: PropTypes.string
  },

  render: function() {
    var balance = this.props.balance ? PrettyPrint.fromWei(this.props.balance, 'ether').toFixed(4) : '0.0000';

    return (
      <tr>
        <td>{PrettyPrint.fullHash(this.props.address)}</td>
        <td>{this.icons()}</td>
        <td>{balance}</td>
      </tr>
    );
  },

  icons: function() {
    var icons = [];
    if (this.props.default === this.props.address) {
      icons.push(<span title='This is the default address.' className='muidocs-icon-action-home' />);
    }
    if (this.props.coinbase === this.props.address) {
      icons.push(<span title='This is the coinbase address.' className='muidocs-icon-action-stars' />);
    }
    return icons;
  }
});

module.exports = MyAccountItem;
