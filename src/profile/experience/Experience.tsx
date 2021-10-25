import React, {ReactElement, useState} from 'react';
import {Collapse} from 'react-bootstrap';

import './Experience.scss';

const Experience = (props: {title: string; children: React.ReactElement}): ReactElement => {
  const [open, setOpen] = useState(false);
  return (
    <div className="Experience">
      <p>
        <a 
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="collapse-link"
        >
          <strong>{props.title} &raquo;</strong>
        </a>
      </p>
      <Collapse in={open}>
        {props.children}
      </Collapse>
    </div>
  );
};

export default Experience;
