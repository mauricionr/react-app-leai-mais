import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LeiaMais } from './components/LeiaMais/LeiaMais';

const webparts: NodeListOf<Element> = document.getElementsByClassName('webpart-script-example');
for (let i: number = 0; i < webparts.length; i++) {
    const description: string = webparts[i].getAttribute('data-description').toString();
    ReactDOM.render(
        <LeiaMais description={description} />,
        webparts[i]
    );
}