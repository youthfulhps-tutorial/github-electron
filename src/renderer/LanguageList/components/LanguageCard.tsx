type LanguageCardProps = {
  languageName: string;
  languageColor: string;
  languageLineCount: number;
  isMostLanguage: boolean;
};

const LanguageCard = ({
  languageName,
  languageColor,
  isMostLanguage,
  languageLineCount,
}: LanguageCardProps) => {
  return (
    <div className={`language-card ${isMostLanguage ? '' : 'hidden'}`}>
      <div
        className="language-card__color"
        style={{
          backgroundColor: languageColor,
          height: isMostLanguage ? '48px' : '24px',
        }}
      />
      <div className="language-card__info">
        <div>{languageName}</div>
        <div className="language-card__count">{languageLineCount}</div>
      </div>
    </div>
  );
};

export default LanguageCard;
