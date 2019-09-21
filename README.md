# \<app-cookies\>

### Element to manage cookies across your app. app-cookies read values from cookie data automatically and serves it to client. Settting and resetting of values are not automatic and need to be triggered by code.

## Installation

```
npm install --save @elifent/app-cookies
```

## In an html file

```html
<html>
  <head>
    <script type="module">
      import "@elifent/app-cookies/app-cookies.js";
    </script>
  </head>
  <body>
    <app-cookies key="location" data="US"></app-cookies>
  </body>
</html>
```

## In a Polymer 3 element

```js
import { PolymerElement, html } from "@polymer/polymer";
import "@elifent/app-cookies/app-cookies.js";
class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <app-cookies id="location" key="location" data="{{location}}"></app-cookies>
      <span>{{location}}</span>
      <input type="text" value="{{newvalue}}">
      <input type="button" value"Set Location" on-click="set">
      <input type="button" value="Unset Location" on-click="unset">
    `;
  }
  static get properties() {
    return {
      location: {
        type: String,
        value: "US"
      },
      newvalue:{
        type: String,
        value: null
      }
    };
  }
  setLocation(){
      this.$.location.set(this.newvalue);
  }
  unsetLocation(){
      this.$.location.unset();
  }
}
customElements.define("sample-element", SampleElement);
```

### Installation

```
  git clone https://github.com/elifent/app-cookies
  cd paper-avatar
  npm install
  npm install -g polymer-cli
```

### Running the demo locally

```
  polymer serve --npm
  open http://127.0.0.1:<port>/components/app-cookies/demo/

```

Found issues? Let me know
