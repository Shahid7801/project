
import React from 'react';

export  const Button = ({ variant, className, children }) => {
  return <button className={`${variant} ${className}`}>{children}</button>;
};
