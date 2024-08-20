import React from 'react';
import Head from 'next/head';

interface HeartIconProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  size?: string;
}

const HeartIcon: React.FC<HeartIconProps> = ({ color = 'red', size = '24px', className, ...props }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <div className={className} {...props}>
        <i className="fas fa-heart" style={{ color, fontSize: size }}></i>
      </div>
    </>
  );
};

export default HeartIcon;
