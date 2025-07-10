import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Title from '../Title';

export default function Header(props) {
   return (
      <div>
         <Title>{props.title}</Title>
         <Button onClick={props.onToggleTheme}>Mudar tema</Button>
         {props.children}
      </div>
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
