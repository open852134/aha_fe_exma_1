import React from 'react';

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FunctionComponent<LabelProps> = ({ children }) => (
  <p className="text-white opacity-30 text-[15px]">{children}</p>
);

export default Label;
