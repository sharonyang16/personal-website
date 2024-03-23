import * as React from 'react';

export default function BoldItalics({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <em>
      <strong>{children}</strong>
    </em>
  );
}
