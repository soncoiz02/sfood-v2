import React, { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-6 py-2 rounded-[50px] bg-primary hover:shadow-lg hover:shadow-red-300 transition-[1s]">
      {children}
    </div>
  );
};

export default Button;
