/*eslint-disable*/
import { useState } from 'react';
import { format } from 'date-fns';
import { enUS, es, fr } from 'date-fns/locale';

const LocaleExample = () => {
  const [date, setDate] = useState(new Date());
  const [locale, setLocale] = useState(enUS);

  const handleLocaleChange = (e) => {
    const newLocale = e.target.value;

    if (newLocale === 'es') {
      setLocale(es);
    } else if (newLocale === 'fr') {
      setLocale(fr);
    } else {
      setLocale(enUS);
    }
  };

  return (
    <div>
      <div>
        <label>Select Locale:</label>
        <select onChange={handleLocaleChange}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      </div>

      <p>Formatted Date: {format(date, 'PPP', { locale })}</p>
    </div>
  );
};

export default LocaleExample;
