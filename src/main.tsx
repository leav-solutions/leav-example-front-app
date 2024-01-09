import {KitApp} from 'aristid-ds';
import React, {Suspense, useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import useAppLang from './hooks/useAppLang';
import i18n from './i18n';
import './index.css';

function Index() {
    const {lang, loading, error} = useAppLang();
    const [i18nIsInitialized, seti18nIsInitialized] = useState(false);

    useEffect(() => {
        if (!i18nIsInitialized && lang) {
            i18n.init(lang);
            seti18nIsInitialized(true);
        }
    }, [lang]);

    if (error) {
        return <p>{error}</p>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        i18nIsInitialized && (
            <React.StrictMode>
                <Suspense fallback={<div>Loading...</div>}>
                    <KitApp>
                        <App />
                    </KitApp>
                </Suspense>
            </React.StrictMode>
        )
    );
}

const root = createRoot(document.getElementById('root')!);

root.render(<Index />);
