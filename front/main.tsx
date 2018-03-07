import React from 'react'
import ReactDOM from 'react-dom'

import i18n from 'i18n/index'
import {I18nextProvider} from 'react-i18next';

import I18nSampleComponent from 'components/I18nSampleComponent'

ReactDOM.render(
    <div>
        <I18nextProvider i18n={i18n}>
            <I18nSampleComponent />
        </I18nextProvider>
    </div>
    ,
    document.querySelector('#i18n-root')
);
