import Head from 'next/head'
import Footer from '../components/Footer';
import Post from '../components/Post';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAllPostsFromServer } from '../lib/utils';

export default function Home () {
  const [ posts, setPosts ] = useState( [] );
  useEffect( async () => {
    let mounted = true;
    if ( mounted ) {
      const postsFromServer = await getAllPostsFromServer();
      setPosts( postsFromServer );
    }
    return () => ( mounted = false );
  }, [] );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>ClearCorrect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center flex-1 px-20 py-10">
        <Link href={ `/blog` }><a className="text-4xl font-bold">Health & Orthodonics</a></Link>
      </main>
      <Footer />
    </div>
  );
}