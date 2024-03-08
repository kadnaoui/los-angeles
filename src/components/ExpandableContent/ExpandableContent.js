import React from 'react';
import Collapsible from 'react-collapsible';

const ExpandableContent = (props) => {
  const {title, children}=props;

  return (
      <Collapsible trigger={title}>
        {children}
      </Collapsible>
  );
};

export default ExpandableContent;