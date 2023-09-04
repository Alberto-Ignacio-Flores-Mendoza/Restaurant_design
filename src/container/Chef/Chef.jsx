import React from 'react';
import {images} from '../../constants'
import {SubHeading} from '../../components'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'></img>
    </div> 

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"></SubHeading>
      <h1 className='headtext__cormorant'> What we believe in</h1>

    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'></img>
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, temporibus quia laborum voluptatem voluptatibus harum perspiciatis! Perspiciatis, illum vero adipisci, ipsum commodi quos impedit inventore quis molestiae optio officiis animi.</p>
      </div>
      <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium officia consectetur ut, nobis rem voluptate pariatur nulla, eaque, illo adipisci aliquid doloribus blanditiis illum obcaecati quod nam aperiam reiciendis.</p>
    </div>

    <div className='app__chef-sign'>
      <p>Kevin Luo</p>
      <p className='p__opensans'>Chef & Founder</p>
      <img src={images.sign} alt='sign'></img>
    </div>

  </div>

  </div>
);

export default Chef;
