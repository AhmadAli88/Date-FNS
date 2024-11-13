import  { useState, useEffect } from 'react';
import { formatRelative, subSeconds } from 'date-fns';

const RelativeTimeDisplay = () => {
  const [referenceDate, setReferenceDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setReferenceDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const relativeTime = formatRelative(subSeconds(referenceDate, 60), referenceDate);

  return (
    <div>
      <p>Relative time: {relativeTime}</p>
    </div>
  );
};

export default RelativeTimeDisplay;