// import React from 'react'
import PropTypes from 'prop-types';

interface TitleProps {
  text: string;
  img: string;
}

function Title(props: TitleProps) {
  const imagePath = `/src/assets/images/${props.img}`;

  return (
    <div className="title-box" style={{backgroundImage: `url(${imagePath})`}}>
        <h1>{props.text}</h1>
    </div>
  )
}

Title.propTypes = {
    text: PropTypes.string,
    img: PropTypes.string,
};

export default Title