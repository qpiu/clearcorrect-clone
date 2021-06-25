import Head from 'next/head'
import Footer from '../components/Footer';
import Post from '../components/Post';
import { useState, useEffect } from 'react';
import { getAllPostsFromServer } from '../lib/utils';

export default function Blog () {
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
                <h1 className="text-6xl font-bold mt-5 mb-5">Health & Orthodontics</h1>
                { posts && (
                    <div className="grid grid-cols-2 gap-5">
                        { posts.map( ( post, id ) => {
                            return (
                                <div key={ id }>
                                    <Post post={ post } />
                                </div>
                            );
                        } ) }
                    </div>
                ) }
            </main>
            <Footer />
        </div>
    );
}