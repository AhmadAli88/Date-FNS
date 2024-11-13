
import { differenceInDays, subDays } from 'date-fns';

const DateDifference = () => {
  const today = new Date();
  const lastWeek = subDays(today, 7);

  const daysDifference = differenceInDays(today, lastWeek);

  return (
    <div>
      <p>Today: {today.toLocaleDateString()}</p>
      <p>Last week: {lastWeek.toLocaleDateString()}</p>
      <p>Days difference: {daysDifference}</p>
    </div>
  );
};

export default DateDifference;