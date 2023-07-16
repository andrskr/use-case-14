import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher({ languages }) {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    (language) => {
      void i18n.changeLanguage(language);
    },
    [i18n]
  );

  return (
    <select
      value={i18n.language}
      onChange={(event) => changeLanguage(event.target.value)}
    >
      {languages.map((currentLanguage) => {
        return (
          <option key={currentLanguage.value} value={currentLanguage.value}>
            {currentLanguage.label}
          </option>
        );
      })}
    </select>
  );
}
