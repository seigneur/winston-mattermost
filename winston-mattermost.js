'use strict';

var util = require('util')
, winston = require('winston')
, MattermostRequest = require('node-mattermost')
, _ = require('lodash');

var mmost = null;
var Mattermost = exports.Mattermost = function (options) {
  winston.Transport.call(this, options);

  if (!options.webhook_url) throw new Error('Must have a webhook_url option set.');    
  mmost = new MattermostRequest(options.webhook_url,null);

  this.name = 'Mattermost';
  this.options = _.defaults(options || {}, {
    username: 'Winston'
  });
};

util.inherits(Mattermost, winston.Transport);

Mattermost.prototype.name = 'Mattermost';

Mattermost.prototype.log = function (level, msg, meta, callback) {
  var self = this;
  if (this.silent) return callback(null, true);
  else {
    try{
      mmost.send({
        text: msg,    
        channel: self.options.channel,
        username: self.options.username
      });
      return callback(null, 'OK');
    }
    catch(Error){
      callback(Error, null);
    }
  }
};
