import Head from 'next/head'
import axios from 'axios';
import parse from 'html-react-parser';
import { getAuthor, getFeaturedImage } from '../../lib/utils';
import { POSTS_API_URL } from '../../lib/constants';
import Hero from '../../sections/Hero';

export default function Post ( { title, featuredImg, author, content, date } ) {
    return (
        <div className="">
            <Head>
                <title>{ title }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero title={title}></Hero>
            <main
                className="">
                <div>
                    <img src={ featuredImg } />
                </div>
                <p className="text-sm mt-5">Written by { author }</p>
                <p className="text-sm font-semibold mb-5">Published on { new Date( date ).toDateString() }</p>
                <div>{ parse( content ) }</div>
            </main>
        </div>
    );
}

// This function gets called at build time
export async function getStaticPaths () {
    const res = await axios.get( POSTS_API_URL );
    const posts = res.data;
    // Get the paths we want to pre-render based on posts
    const paths = posts.map( ( post ) => ( {
        params: {
            id: post
                .id
                .toString()
        }
    } ) );
    // We'll pre-render only these paths at build time.
    return { paths, fallback: false };
}
// This also gets called at build time
export async function getStaticProps ( { params } ) {
    const res = await axios.get( `${ POSTS_API_URL }/${ params.id }` );
    const post = await res.data;
    const featuredImg = await getFeaturedImage( post.featured_media );
    const author = await getAuthor( post.author );
    return {
        props: {
            title: post.title.rendered,
            content: post.content.rendered,
            featuredImg,
            author,
            date: post.date
        }
    };
}