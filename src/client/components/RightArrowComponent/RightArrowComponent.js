import React from 'react';
import PropTypes from 'prop-types';
import './RightArrowComponent.styles.css';

export default function RightArrowComponent(props) {
  return (
    <svg
      onClick={props.clickRightArrow}
      className="bi bi-arrow-right-circle"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      <path
        fillRule="evenodd"
        d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
      />
      <path
        fillRule="evenodd"
        d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
}

RightArrowComponent.propTypes = {
  clickRightArrow: PropTypes.func.isRequired,
};
