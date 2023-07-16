import { LanguageSwitcher } from "./components/language-switcher";
import { supportedLanguages } from "./i18n/supported-languages";
import { IntlValues } from "./components/intl-values";

import { dates } from "./config/dates";
import { numbers } from "./config/numbers";
import { units } from "./config/units";

export function App() {
  return (
    <main className="container">
      <section>
        <header className="header">
          <h1 className="title">React I18Next</h1>
          <div className="language-switcher">
            <LanguageSwitcher languages={supportedLanguages} />
          </div>
        </header>

        <IntlValues
          title="Date and Time"
          values={dates}
          valueKey="intlDateTime"
        />

        <IntlValues title="Numbers" values={numbers} valueKey="intlNumber" />
        <IntlValues title="Units" values={units} valueKey="intlNumber" />
      </section>
    </main>
  );
}
