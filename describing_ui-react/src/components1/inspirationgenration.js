// import * as React from 'react';
import quotes from './quotes';
import FancyText from './fancytext';

import { useState } from 'react';

export default function InspirationGenerator({children}) {
  const [index, setIndex] = useState(0);
  const quote = quotes[index];
  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <>
      {/* <p>Your inspirational quote is:</p> */}
      <FancyText text={quote} />
      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}
