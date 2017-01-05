import * as React from 'react';
import ILeiaMaisProps from './ILeiaMaisProps';
export declare class LeiaMais extends React.Component<ILeiaMaisProps, {}> {
    _possibleTexts: {
        'en-US': string;
        'pt-BR': string;
    };
    _text: string;
    hashvalue: string;
    lang: string;
    constructor(props: ILeiaMaisProps);
    setText(): void;
    componentWillMount(): void;
    render(): JSX.Element;
}
