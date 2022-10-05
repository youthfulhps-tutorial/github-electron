import { useContext } from 'react';
import '../styles/index.scss';
import { UserContext } from '@shared/contexts/UserContext';
import { getLanguageColor } from '../utils/languageHelper';
import LanguageCard from './LanguageCard';
import useLanguageList from '../queries/useLanguageList';

const LanguageList = () => {
  const { userId } = useContext(UserContext);
  const { mostLanguage, languageList } = useLanguageList(userId);

  return (
    <section className="language">
      {Object.entries(languageList ?? {}).map(([key, value]) => (
        <LanguageCard
          key={key}
          languageName={key}
          languageColor={getLanguageColor(key)}
          isMostLanguage={key === mostLanguage}
          languageLineCount={Number(value)}
        />
      ))}
    </section>
  );
};

export default LanguageList;
