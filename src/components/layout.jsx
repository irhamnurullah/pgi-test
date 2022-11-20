import React from 'react';

export default function Layout({ children }) {
  return (
    <main className="bg-slate-50">
      <div className="container mx-auto">{children}</div>
    </main>
  );
}
