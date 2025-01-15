import React from 'react';
import '../styles/Global.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">WordElevate</header> {/* אופציונלי */}
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
