import React from 'react';
import { RotateLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white text-black text-xl font-semibold">
      <RotateLoader   color="text-gray-600 "/>
    </div>
  );
};

export default Loading;
