import { useContext } from 'react';
import '../styles/index.scss';
import { getLanguageColor } from '@Language/utils/languageHelper';
import { UserContext } from '@shared/contexts/UserContext';
import LanguageCard from '@Language/components/LanguageCard';
import useLanguageList from '../queries/useLanguageList';

const Language = () => {
  const { userId } = useContext(UserContext);
  const { mostLanguage, languageList } = useLanguageList(userId);

  return (
    <section className="language">
      {Object.entries(languageList ?? {}).map(([key, value]) => (
        <LanguageCard
          languageName={key}
          languageColor={getLanguageColor(key)}
          isMostLanguage={key === mostLanguage}
          languageLineCount={Number(value)}
        />
      ))}
    </section>
  );
};

export default Language;
