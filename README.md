# New Life in Davie

### Installation

- install [node](http://nodejs.org/)
- install [git](http://git-scm.com/)
- install [grunt-cli](https://github.com/gruntjs/grunt-cli) `npm install -g grunt-cli`
- install [bower](http://bower.io/) `npm install -g bower`
- clone newlifeindavie

```
(.) > git clone https://github.com/kavun/newlifeindavie.git
(.) > cd newlifeindavie
(./newlifeindavie) > npm install
(./newlifeindavie) > bower install
(./newlifeindavie) > cd bower_components/pure
(./newlifeindavie/bower_components/pure) > npm install
(./newlifeindavie/bower_components/pure) > grunt
(./newlifeindavie/bower_components/pure) > cd ../..
(./newlifeindavie) > grunt
(./newlifeindavie) > grunt connect
```

navigate to `http://localhost:9001/views/index.html`
