import React from 'react';
import { blog } from '../../FakeData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Blg from './Blg';
const Blog = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },]
    };
    return (
        <section id="blog">
            <div className='container my-5 pt-5'>
                <h1 className='text-center section-heading my-5'>My Blogs</h1>
                <Slider {...settings}>
                    {blog.map(blg => <Blg blg={blg} />)}
                </Slider>
            </div>
        </section>
    );
};

export default Blog;