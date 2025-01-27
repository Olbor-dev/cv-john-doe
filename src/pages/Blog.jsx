import React from 'react';
import ArticlesBlog from '../components/ArticlesBlog';
import banner from '../img/banner.jpg';

const Blog = () => {
  return (
    <main>
        <img src={banner} alt="bannière" className="img-fluid w-100 pb-2" />
        <div className="container-fluid pb-4">
            <h1 className="text-center text-uppercase mt-3">Blog</h1>
            <p className="text-center">Retrouvez ici quelques articles sur le développement web.</p>
            <hr className="border border-primary border-3 opacity-75 mx-auto mb-4" width="20%" />
            <ArticlesBlog />
        </div>
    </main>
  )
}

export default Blog;