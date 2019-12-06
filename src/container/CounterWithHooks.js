import React, { useState, Fragment } from 'react';

export function CounterWithHooks({intialValue: initialValue, language}) {
    const [count, setCount] = useState(initialValue);
    const [lang, setLang] = useState(language);

    const setLg = (lg) => lg === 'de' ? 'en' : 'de';
    const inc = x => x + 1;
    const isDe = () => lang === 'de';

    return (
        <Fragment>
            <button onClick={() => setLang(setLg)}>{isDe()? 'EN' : 'DE'}</button>
            <button onClick={() => setCount(inc)}>{isDe()? 'Klick mich' : 'Click me'}</button>
            <div>{isDe()? '' : 'Clicked '}{count}{isDe()? ' mal geklickt' : ' times'}</div>
        </Fragment>);
}
