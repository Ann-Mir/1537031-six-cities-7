import React from 'react';
import Header from '../../header/header';

function NotFoundPage() {
  return (
    <main className="page__main">
      <Header />
      <section className="container">
        <h1>404. Page not found</h1>
      </section>
    </main>
  );
}

export default NotFoundPage;
