(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n.p+"static/media/hangman-logo.68647bdf.svg"},12:function(e,t,n){e.exports=n(22)},17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),o=(n(17),n(1)),s=n(2),l=n(4),d=n(3),u=n(5);var m=function(e){var t=e.letter;return r.a.createElement("div",{className:"word-letter-container"},r.a.createElement("span",{className:"word-letter"},t))},h=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).componentWillMount=function(){n.props.setCorrectLetters(n.correctLetters)},n.correctLetters=[],n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.splittedWord,a=t.pickedLetters,c=n.map(function(t,c){return n.includes(t)&&(e.correctLetters.includes(t)||e.correctLetters.push(t)),a.includes(t)?r.a.createElement(m,{key:c,letter:t}):r.a.createElement(m,{key:c,letter:" "})});return r.a.createElement("div",{className:"word"},r.a.createElement("div",{className:"word-letter-list-container"},c))}}]),t}(a.Component);var f=function(e){var t=e.letter,n=e.onClick;return r.a.createElement("button",{onClick:function(e){return n(e,{letter:t})},className:"alpha-letter-container"},t)},p=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e,t){e.persist(),e.target.disabled=!0,n.props.checkLetter(t.letter)},n.alphabet=new Array(26).fill(1).map(function(e,t){return String.fromCharCode(65+t)}),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.alphabet.map(function(t,n){return r.a.createElement(f,{letter:t,key:n,onClick:e.handleClick})});return r.a.createElement("div",{className:"alphabet"},r.a.createElement("div",{className:"letter-list-container"},t))}}]),t}(a.Component),g=n(7),v=n.n(g),k=n(11),w=n.n(k),E=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.failsLeft;return r.a.createElement("div",{className:"hangman"},r.a.createElement("img",{className:"hangmanSvg",src:v.a,alt:"hangman logo"}),r.a.createElement("div",{className:"fails"}," Fails left: ",e,"    "))}}]),t}(a.Component),b=n(8),L=n.n(b),C=(n(21),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).checkLetter=function(e){var t=Object.assign({},n.state);t.pickedLetters=t.pickedLetters.concat(e),n.state.splittedWord.includes(e)?t.correctCount++:t.failsLeft--,0===t.failsLeft?t.win=!1:t.correctLetters.length===t.correctCount?t.win=!0:t.win=void 0,n.setState(t)},n.setCorrectLetters=function(e){n.setState(function(){return{correctLetters:e}})},n.playAgain=function(){n.setState({splittedWord:L()().toUpperCase().split(""),pickedLetters:[],win:void 0,failsLeft:10,correctCount:0})},n.myRef=r.a.createRef(),n.state={splittedWord:L()().toUpperCase().split(""),pickedLetters:[],correctLetters:[],failsLeft:10,correctCount:0,win:void 0},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.win?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"game-end"},r.a.createElement("h1",null,"You won the jackpot on lottery called life."),r.a.createElement("h2",null,"Word '",this.state.splittedWord,"'' bringed you good luck."),r.a.createElement("div",{className:"reset-button",onClick:this.playAgain},r.a.createElement("a",{href:"#game"}," Another ticket?")))):0==this.state.win?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"game-end"},r.a.createElement("h1",null,"Sorry. You hanged."),r.a.createElement("h1",null,"Word '",this.state.splittedWord,"'' was your executor."),r.a.createElement("div",{className:"reset-button",onClick:this.playAgain},r.a.createElement("a",{href:"#game"},"Die again?")))):r.a.createElement("div",{className:"App",ref:this.myRef},r.a.createElement("div",{className:"hero"},r.a.createElement("img",{className:"hangman-logo",src:w.a,alt:"hangman logo"}),r.a.createElement("div",{className:"play-button"},r.a.createElement("a",{href:"#game"},"Play it cool."))),r.a.createElement("div",{className:"game",id:"game"},r.a.createElement(E,{failsLeft:this.state.failsLeft}),r.a.createElement(h,{setCorrectLetters:this.setCorrectLetters,splittedWord:this.state.splittedWord,pickedLetters:this.state.pickedLetters}),r.a.createElement(p,{checkWin:this.checkWin,checkLose:this.checkLose,checkLetter:this.checkLetter,pickedLetters:this.state.pickedLetters})))}}]),t}(a.Component)),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(C,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/hangman",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/hangman","/service-worker.js");j?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):y(e)})}}()},7:function(e,t,n){e.exports=n.p+"static/media/hangman.97a9ce8e.svg"}},[[12,2,1]]]);
//# sourceMappingURL=main.6f0bcf8b.chunk.js.map