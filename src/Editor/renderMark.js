import React from 'react';

export default function renderMark(props, editor, next) {
  const { children, mark, attributes } = props;
  switch (mark.type) {
    case 'bold':
      return <strong {...{ attributes }}>{children}</strong>;
    case 'italic':
      return <em {...{ attributes }}>{children}</em>;
    case 'code':
      return <code {...{ attributes }}>{children}</code>;
    case 'underline':
    case 'underlined':
      return <u {...{ attributes }}>{children}</u>;
    case 'strikethrough':
      return <strike {...{ attributes }}>{children}</strike>;
    default:
      return next();
  }
}
