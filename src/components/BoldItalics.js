import * as React from 'react';

export default function BoldItalics({ children }) {
  return (
    <em>
      <strong>{children}</strong>
    </em>
  );
}
