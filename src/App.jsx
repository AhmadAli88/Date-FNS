import './App.css';
import DateDifference from './components/Date Differences';
import DatePickerExample from './components/Date Picker';
import DateFormatter from './components/Formatting Dates';
import LocaleExample from './components/Locale Support';
import RelativeTimeDisplay from './components/Relative Time Display';
import TimezoneExample from './components/Timezone Handling';

function App() {
  return (
    <div>
      <h2>DateFormatter</h2>
      <DateFormatter />
      <h2>DateDifference</h2>
      <DateDifference />
      <h2>RelativeTimeDisplay</h2>
      <RelativeTimeDisplay />
      <h2>DatePickerExample</h2>
      <DatePickerExample />
      <h2>TimezoneExample</h2>
      <TimezoneExample />
      <h2>LocaleExample</h2>
      <LocaleExample/>
    </div>
  );
}

export default App;
