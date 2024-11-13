import  { useState } from 'react';
import { format, formatInTimeZone } from 'date-fns-tz';

const TimezoneExample = () => {
  const [dateTime, setDateTime] = useState(new Date());

  return (
    <div>
      <div>
        <label>Date and Time:</label>
        <input
          type="datetime-local"
          value={format(dateTime, "yyyy-MM-dd'T'HH:mm")}
          onChange={(e) => setDateTime(new Date(e.target.value))}
        />
      </div>

      <div>
        <p>Local Time: {format(dateTime, 'MMM d, yyyy h:mm a')}</p>
        <p>New York Time: {formatInTimeZone(dateTime, 'America/New_York', 'MMM d, yyyy h:mm a')}</p>
        <p>Tokyo Time: {formatInTimeZone(dateTime, 'Asia/Tokyo', 'MMM d, yyyy h:mm a')}</p>
      </div>
    </div>
  );
};

export default TimezoneExample;