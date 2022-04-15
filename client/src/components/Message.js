import React from 'react';
import './Message.css';

const Message = ({ msg }) => {
  const alignright = false;
  return (
    <div className={alignright ? 'msgbox justfiyend' : 'msgbox'}>
      <div className="msg">{msg}</div>
    </div>
  );
};

export default Message;
