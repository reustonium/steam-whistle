## Steam Whistle ![dev](https://img.shields.io/badge/dev-0.1.1-yellow.svg) ![stable](https://img.shields.io/badge/stable-0.1.1-brightgreen.svg) ![cc](https://img.shields.io/codeclimate/github/reustonium/steam-whistle.svg)

[Steam Whistle](http://steamwhistle.io) is a web application for facilitating easy transmission of encrypted messages.
Communicating securely and discretely has never been more important.  Whether you
are sharing information with your doctor, lawyer, or friend, Steam Whistle aims to 
make the process intuitave and easy.

If you are a journalist or a whistle-blower, please consider being a Steam Whistle Blower.

### Technology
Steam Whistle uses the [keybase.io](https://keybase.io) API for:
* User Authentication
* User Lookup

Steam Whistle uses the kbpgp.js node package for:
* Message and file Encryption / Decryption
* Message and file Signing

Encrypted messages are stored in their encrypted state, requiring a users passphrase to decrypt.
At no point does Steam Whistle store your passphrase.

### Project Information
Steam Whistle is built on the MEAN stack, leveraging javascript on both the front and backends.

Steam Whistle follows [semantic versioning](http://semver.org/)
> a simple set of rules and requirements that dictate how version numbers are assigned and incremented.

Steam Whistle follows the [git flow](http://nvie.com/posts/a-successful-git-branching-model/) branching model.
The 'stable' branch represents the currently deployed code and API. 'dev' represents new features currently
under development.

#### Issues ![issues](https://img.shields.io/github/issues/reustonium/steam-whistle.svg)
Steam Whistle welcomes contributors, if you have an idea please file an [issue](https://github.com/reustonium/steam-whistle/issues).  If you'd like to contribute code please send a pull request!

Steam Whistle is covered by the [GPLv2](https://github.com/reustonium/steam-whistle/blob/stable/LICENSE) Software License.
