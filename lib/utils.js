import axios from 'axios';
import { POSTS_API_URL, AUTHORS_API_URL, MEDIA_API_URL } from './constants';

export const getPostsCount = async ( category_id ) => {
  //   get all posts from Server
  try {
    const { headers } = await axios.get( `${ POSTS_API_URL }?categories=${ category_id }` );
    return { count: headers[ 'x-wp-total' ], page: headers[ 'x-wp-totalpages' ] };
  } catch ( error ) {
    console.log( error );
  }
};

export const getPostsFromServer = async ( category_id, page ) => {
  try {
    const { data } = await axios.get( `${ POSTS_API_URL }?categories=${ category_id }&page=${ page }` );
    return data;
  } catch ( error ) {
    console.log( error );
  }
};

export const getAuthor = async ( id ) => {
  try {
    const {
      data: { name },
    } = await axios.get( `${ AUTHORS_API_URL }/${ id }` );
    return name;
  } catch ( error ) {
    console.log( error );
  }
};

export const getFeaturedImage = async ( id ) => {
  try {
    const res = await axios.get( `${ MEDIA_API_URL }/${ id }` );
    const url = res.data.media_details.sizes.full.source_url;
    return url;
  } catch ( error ) {
    console.log( error );
    return '';
  }
};