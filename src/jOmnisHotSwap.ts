class OmnisCallbackObjectDummy {
  onLoadFired: boolean;
  onWebSocketOpenedFired: boolean;

  constructor() {
    this.onLoadFired = false;
    this.onWebSocketOpenedFired = false;
  }
  omnisOnLoad() {
    this.onLoadFired = true;
    console.log('OmnisCallbackObjectDummy: onLoad');
  }

  omnisOnWebSocketOpened() {
    this.onWebSocketOpenedFired = true;
    console.log('OmnisCallbackObjectDummy: onWebSocketOpened');
  }
}

if (window['jOmnis']) {
  jOmnis.callbackObject = new OmnisCallbackObjectDummy();
  jOmnis.callbackHotSwap = function (newCallback) {
    var oldCallback = this.callbackObject;
    this.callbackObject = newCallback;
    if (oldCallback.onLoadFired) {
      this.callbackObject.omnisOnLoad();
    }
    if (oldCallback.onWebSocketOpenedFired) {
      this.callbackObject.omnisOnWebSocketOpened();
    }
  };
} else {
  console.error('ERROR: jOmnis not defined');
  //throw new Error('jOmnis non definito!');
}
