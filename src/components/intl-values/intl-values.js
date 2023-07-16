import { useTranslation } from "react-i18next";

export function IntlValues({ title, values, valueKey }) {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {values.map((currentValue) => {
          return (
            <li key={currentValue.id}>
              {t(valueKey, {
                value: currentValue.value,
                formatParams: currentValue.formatParams,
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
