import * as React from 'react';
import IHelloWorldProps from './IHelloWorldProps';
export declare class Hello extends React.Component<IHelloWorldProps, {}> {
    _possibleTexts: {
        'en-US': string;
        'pt-BR': string;
    };
    _text: string;
    hashvalue: string;
    lang: string;
    constructor(props: any);
    setText(): void;
    componentWillMount(): void;
    render(): JSX.Element;
}
