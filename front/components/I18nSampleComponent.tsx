import React from 'react';
import {translate} from 'react-i18next';

interface IProps {
    i18n: Object
    t: Function
}

const I18nSampleComponent = (props: IProps) => (
    <ul>
        <li>{props.t('javascript.async')}</li>
        <li>{props.t('ruby.blackMagic')}</li>
        <li>{props.t('functionalLanguage')}</li>
    </ul>
);

export default translate()(I18nSampleComponent);