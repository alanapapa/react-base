import "./App.css";
import { IntlProvider, FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";

const messages = {
  "ru-RU": {
    title: "Привет Мир!",
    description: "У вас {count} новых сообщения",
  },
  "en-US": {
    title: "Hello World!!",
    description: "You have {count} new messages",
  },
};

function App() {
  const defaultLocale = localStorage.getItem("locale") || navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  console.log(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale)
  }, [locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id='title' /><br/>
        <FormattedMessage id='description' values={{count: 35}} />
        <br />
        <button onClick={() => setLocale("ru-RU")}>RU</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
