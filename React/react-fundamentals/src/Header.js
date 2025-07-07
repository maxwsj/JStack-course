import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Header(props) {
   return (
      <>
         <h1>{props.title}</h1>
         <Button onClick={props.onToggleTheme}>Mudar tema</Button>
         {props.children}
      </>
   );
}

Header.propTypes = {
   title: PropTypes.string,
   children: PropTypes.node,
};

// DefaultProps
Header.defaultProps = {
   title: `JStack Blog`,
};
