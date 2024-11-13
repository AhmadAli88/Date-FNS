import { format, parseISO } from 'date-fns';

const DateFormatter = () => {
  const dateString = '2023-04-25T12:34:56';
  const date = parseISO(dateString);

  return (
    <div>
      <p>Raw date: {dateString}</p>
      <p>Formatted date: {format(date, 'MMM d, yyyy h:mm a')}</p>
      <p>Formatted date (short): {format(date, 'MM/dd/yy')}</p>
    </div>
  );
};

export default DateFormatter;
