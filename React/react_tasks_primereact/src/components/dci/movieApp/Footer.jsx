import React from 'react';

export default function Movie() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='footer'>
      <div>
        <p>TV Guide by Márcio</p>
        <p>
          Live API Data from <span>The Movie DB</span>
        </p>
      </div>
      <div>
        <p>Build with React</p>
        <img src='assets/images/logo.svg' alt='' />
        <p>
          <span>Márcio DCI </span>Project
        </p>
      </div>
      <div>
        <p>----------</p>

        <a href='#/dci/movieApp/' onClick={scrollTop}>
          <span>Back to Top</span>
        </a>
      </div>
    </div>
  );
}
