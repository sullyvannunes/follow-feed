import React from "react";

import '../styles/Content.css';

function Content(props: any) {
  return (
    <div className="Content">
      { props.children }
    </div>
  )
}

export default Content;
