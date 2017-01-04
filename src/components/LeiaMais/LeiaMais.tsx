import * as React from 'react';
import ILeiaMaisProps from './ILeiaMaisProps';

export class LeiaMais extends React.Component<ILeiaMaisProps, {}> {
  public _possibleTexts: { 'en-US': string, 'pt-BR': string }
  public _text: string;
  public hashvalue: string;
  public lang: string;
  constructor(props: any) {
    super(props);
    this.state = {
      'displayText': '',
      'en-US': 'Read the publications from our professionals of the practice area: {area}',
      'pt-BR': 'Veja as publicações produzidas por nossos profissionais da área de {area}',
    }
  }
  public setText(): void {
    this.lang = document.querySelector('html').attributes.getNamedItem('lang').value;
    let hash = decodeURIComponent(window.location.hash).slice(1).split(':')
    this.hashvalue = hash[1] || '';
  }
  public componentWillMount() {
    this.setText();
  }
  public render(): JSX.Element {    
    return (
      <div id="leia-mais">
        <p>{this.state[this.lang].replace('{area}', this.hashvalue).replace(/\*/gi, '')}</p>
      </div>
    );
  }
}