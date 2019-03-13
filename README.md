Peercoin.net Repo
============

The static html files for [Peercoin.net](http://peercoin.net).
The site is hosted on the Github itself, via gh-pages.

### Issues
Content requests, bugs, etc. are all handled through [Github Issues](https://github.com/peercoin/peercoin.net/issues). We will try to get to your issue as soon as possible.

### Pull Requests
If you have a simple change to the website, we ask that you put in a pull request instead of an issue. These include things like link changes, text errors, etc. We can add these to the live site just by accepting the pull, which makes everything easier.

If don't know how to submit a pull request use these helpful guides: [one](https://help.github.com/articles/using-pull-requests) and [two](https://gun.io/blog/how-to-github-fork-branch-and-pull-request/).

### Updating Wallet Signatures
Because Github hosting does not allow for PHP, we use Javascript for persistant content.  Signatures can be updated in the signatures file.  Other JS files have readable (HTML) versions in the readable folder.  

### Installing and Running
If you want to test out the website locally, raise a local http server.
For example `python3 -m http.server 8080`.
