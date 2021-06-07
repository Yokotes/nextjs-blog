import Head from 'next/head';
import React from 'react';

type LayoutProps = {
  title?: string;
  children: React.ReactChild;
}

export default function Layout({ children, title="" }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{ `NextJS Blog | ${title}` }</title>
      </Head>
      <div className="container">
        { children }
      </div>
    </>
  )
}