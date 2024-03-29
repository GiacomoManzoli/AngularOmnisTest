import { OmnisCallbackObject } from './OmnisCallbackObject';
export interface OSMessage {
  evType: string;
  callId: number;
  data?: string;
  callback?: string;
}

export class JOmnisWrapper {
  jOmnis: JOmnis;

  constructor(jOmnis: JOmnis) {
    this.jOmnis = jOmnis;

    //
    const callbackObject = new OmnisCallbackObject(this);

    // Set's the right callback object
    const swappableOmnis = jOmnis as JOmnisSwappable;
    swappableOmnis.callbackHotSwap(callbackObject);
  }

  /**
   * Wrapps jOmnis.sendControlEvent.
   * @param {String} evName Nome dell'evento, tipicamente ha un prefisso "ev"
   * @param {Object | String} [evData] [OPZIONALE] Dati dell'evento come oggetto o come JSON.stringify
   * @param {Number} [callId] [OPZIONALE] Id della chiamata alla quale risponde l'evento
   * @param {String} [omnisCallbackName] [OPZIONALE] Nome del metodo di callback di Omnis
   */
  sendEvent(
    evName: string,
    evData?: string | any,
    callId?: number,
    omnisCallbackName?: string
  ) {
    console.info(`[jOmnis] sendEvent ${evName}`, evData);
    var message: OSMessage = {
      evType: evName,
      callId: callId && callId !== 0 ? callId : 0,
    };
    if (evData) {
      message.data =
        typeof evData === 'string' ? evData : JSON.stringify(evData);
    }
    if (omnisCallbackName) {
      message.callback = omnisCallbackName;
    }
    jOmnis.sendControlEvent(message);
  }
}
