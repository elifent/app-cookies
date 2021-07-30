import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import cookiejs from "cookiejs.js";

/**
 * `app-cookies`
 * Polymer element to work with browser cookies
 * app-cookies read values from cookie data automatically and serves it to client. Settting and resetting of values are not automatic and need to be triggered by code.
 *
 * Add app-cookies to code as below <br/>
 * `<app-cookies id="elementId" key="cookieKey"></app-cookies>`
 * 
 * To set app cookies use  <br/>
 * this.$.elementId.set('new value');
 * 
 * To unset value of cookie use <br/>
 * this.$.elementId.unset();
 * 
 * If you want to read values from app-cookies, code as below<br/>
 * `<app-cookies key="cookieKey" data="{{cookieValue}}"></app-cookies>`
 * 
 * 
 * @customElement
 * @polymer
 */
Polymer({
  is: 'app-cookies',
  properties:{
    /** Cookie key*/
    key: {
      type: String,
      value: null
    },
    /** Cookie data*/
    data: {
      type: String,
      value: null,
      notify: true
    },
    /** Options that can be used while setting cookie 
     * available options are
     * 1. domain
     * Specifies allowed hosts to receive the cookie, default is the host of the current document location
     * eg: 'http://elifent.tech'
     * 
     * 2. path
     * Indicates a URL path that must exist in the requested URL, default is '/'
     * 
     * 3. expires
     * Cookie is deleted when the client shuts down (session-cookie) or when the expire date is reached, default is after sessio is closed
     * 
     * 4. max-age
     * Cookie expires after a specific length of time in seconds, default is undefined
     * 
     * 5. secure
     * Cookie is only sent to the server with a encrypted request over the HTTPS protocol, default: false
    */
    options: {
      type: Object,
      value: {}
    }
  },

  ready: function(){
    //When ready load value from cookiejs to this.data
    if(this.key != null) this.data = cookiejs.get(this.key);
  },

  set: function(value) {
    //Creating a new cookie
    //Set option to null and then each value to option if they are present in properties
    //If not present cookiejs will use the default value

    let options = {};
    
    if(this.options['domain'] != undefined){
        options['domain'] = this.options['domain'];
    }
    
    if(this.options['path'] != undefined){
        options['path'] = this.options['path'];
    }

    if(this.options['expires'] != undefined){
        options['expires'] = this.options['expires'];
    }

    if(this.options['max-age'] != undefined){
        options['max-age'] = this.options['max-age'];
    }

    options['secure'] = this.options['secure'];

    //Create a new cookie
    cookiejs.set(this.key, value);
     //mutate the value to data
    this.data = value;
  },

  unset: function() {
    //Remove cookie from cookiejs
    cookiejs.remove(this.key);
    this.data = null;
  }

});
