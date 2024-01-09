import {useTranslation} from 'react-i18next';
import './Home.css';
import leavLogo from './assets/leav_engine.png';

function Home() {
    const {t} = useTranslation();

    return (
        <>
            <div>
                <img src={leavLogo} className="logo" />
            </div>
            <h2>{t('example_app')}</h2>
        </>
    );
}

export default Home;
