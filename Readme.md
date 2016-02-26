# winston-mattermost


> A [mattermost][mattermost] transport for [winston][winston].


## Index

* [Install](#install)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Install

```bash
npm install -S winston winston-mattermost
```


## Usage

```js
var winston = require('winston');
var mattermost = require('winston-mattermost').Mattermost;

var options = {
  "webhook_url": "webhook url from Mattermost",
  "channel": "channel",
  "level": "level to log"
}

winston.add(mattermost, options)
```
## Credits

* Based on [winston-loggly](https://github.com/indexzero/winston-loggly) by [Charlie Robbins](http://blog.nodejitsu.com)


## License

[MIT][license-url]
[license-url]: LICENSE
[mattermost]: http://http://www.mattermost.org/
[winston]: https://github.com/flatiron/winston
[npm-url]: https://npmjs.org/package/winston-mattermost
