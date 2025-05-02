import React from 'react';

const PageHeader = ({ title, text }) => {
  return (
    <section
      className="page-header bg--cover"
      style={{ backgroundImage: "url(/images/banner/bg.jpg)" }}
    >
      <div className="container">
        <div className="page-header__content text-center">
          <h2 className="text-white text-capitalize">{title}</h2>
          {text && <p className="text-white mt-2">{text}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
