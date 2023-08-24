import {
    LightningElement, api,
} from 'lwc';

import { FlexCardMixin } from "omnistudio/flexCardMixin";

export default class MapCEP extends FlexCardMixin(LightningElement) {
    
    @api logradouro;
    @api localidade;
    @api uf;
    @api bairro;
    
    mapMarkers;
    cepLocal;

    @api
    get cep() {
      return this.cepLocal;
    }
  
    set cep(value) {
      this.cepLocal = value;
      this.fillMap();
    }

    fillMap(){
        this.mapMarkers = [];
        
        let Street = this.logradouro;
        let City = this.localidade;
        let State = this.uf;
        let PostalCode = this.cepLocal;

        this.mapMarkers.push({
            location: {
                Street,
                City,
                State,
                PostalCode
            },
            title: this.cepLocal
        });

    }

}