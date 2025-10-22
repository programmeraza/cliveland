import React from 'react';
import './Branch.scss';
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";

const Branch = ({ title, description, backgroundImage }) => {
  return (
    <div
      className="branch"
      style={{ '--bg-image': `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="branch__wrapper">
          <div className="branch__content">
            <Link to={'/'}>
              <MdArrowBack />
            </Link>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branch;
