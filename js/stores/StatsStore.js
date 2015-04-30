var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _stats = {
  net: {}
};

var StatsStore = assign({}, EventEmitter.prototype, {

  getNetStats: function() {
    return _stats.net;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case AppConstants.MYETH_UPDATE_NET_STATS:
      _stats.net = action.stats;
      StatsStore.emitChange();
      break;
    default:
      // no op
  }
});

module.exports = StatsStore;