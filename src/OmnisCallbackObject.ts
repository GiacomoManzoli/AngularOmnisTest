import { JOmnisWrapper } from './OmnisWrapper';

// TODO: define the Omnis Interface

export class OmnisCallbackObject {
  public jOmnisWrapper: JOmnisWrapper;

  constructor(jOmnisWrapper: JOmnisWrapper) {
    this.jOmnisWrapper = jOmnisWrapper;
  }

  omnisOnLoad() {
    console.info(
      ` Omnis interface loaded. Waiting for the communication link...`
    );
  }

  omnisOnWebSocketOpened() {
    console.info(` web socket opened`);
    this.jOmnisWrapper.sendEvent('ev_Ready');
  }

  omnisSetData(params) {
    console.log('omnisSetData', params);
  }

  omnisGetData(params) {
    console.log('omnisGetData', params);
  }
}
