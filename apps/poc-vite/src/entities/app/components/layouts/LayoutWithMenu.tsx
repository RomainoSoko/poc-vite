import React from 'react';
import Header from '../header/Header';

export default function LayoutWithMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className={'mt-10'}>{children}</main>
    </>
  );
}
