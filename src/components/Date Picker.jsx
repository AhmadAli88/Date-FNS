import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addDays, format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerExample = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
        maxDate={addDays(new Date(), 30)}
        dateFormat="MMM d, yyyy"
      />
      <p>Selected date: {format(selectedDate, 'MMM d, yyyy')}</p>
    </div>
  );
};

export default DatePickerExample;