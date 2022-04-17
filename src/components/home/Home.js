import React from 'react';
import './Home.css';

function Home() {
  return (
      <div>

      {/* about */}
        <div className='about'>
            <div className="about-heading">
                <h1>ABOUT HACK BVP 5.0</h1>
            </div>

            <div className="about-content">
                <div className="about-pic">
                    {/* <img src="\images\mario_png.png" alt="" /> */}
                </div>

                <div className="about-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis explicabo omnis quae optio totam
                    consequuntur, ipsa dolorum et quas aut a dolor exercitationem atque assumenda dolore nesciunt vero iusto
                    unde eos ipsam fugit? Fuga molestiae dolorum modi alias quibusdam laboriosam non nisi voluptatum voluptates,
                    in quas quaeiae!molestiae exercitationem mollitia recusandae ut. Omnis, iure exercitationem optio
                    obcaecati praesentium officia voluptas ipsum esse aliquam aspernatur reprehenderit laborum sunt quas sit
                    vitae, nisi provident suscipit dolores, corrupti velit modi, qui totam sit magni reprehenderit vel
                    obcaecati. Eos sapiente sed nulla hic earum dolorum, et id amet laborum fuga similique temporibus quas,
                    expedita nemo voluptates molestias quae natus repudiandae illo. Odio nesciunt illum labore neque?
                </div>
            </div>
        </div>

        {/* themes */}
        <div className='themes'>
            <div className='themes-head'>
                <h1 className="themes-heading">THEMES</h1>
            </div>
            <div className="themes-content">
                <div className="box">
                    <img src="" alt="" />
                    <h3 className="themes-heading">About</h3>
                </div>
                <div className="box">
                    <img src="" alt="" />
                    <h3 className="themes-heading">About</h3>
                </div>
                <div className="box">
                    <img src="" alt="" />
                    <h3 className="themes-heading">About</h3>
                </div>
                <div className="box">
                    <img src="" alt="" />
                    <h3 className="themes-heading">About</h3>
                </div>
                <div className="box">
                    <img src="" alt="" />
                    <h3 className="themes-heading">About</h3>
                </div>
                <div className="box">
                    <img src="" alt="" />
                    <h3 className="themes-heading">About</h3>
                </div>
            </div>
        </div>

        {/* sponsers */}
        <div className='sponsers'>
            <div className='sponsers-head'>
                <h1 className="sponsers-heading">SPONSERS</h1>
            </div>
            <div className="sponsers-content">
                <div className="s-box">
                    <img src="" alt="" />
                </div>
                <div className="s-box">
                    <img src="" alt="" />
                </div>
                <div className="s-box">
                    <img src="" alt="" />
                </div>
                <div className="s-box">
                    <img src="" alt="" />
                </div>
            </div>
        </div>

        {/* faq */}
        <div className='faq'>
            <div className='faq-head'>
                <h1 className="faq-heading">FAQ</h1>
            </div>
        </div>

        {/* contact */}
        <div className='contact'>
            <div className='contact-head'>
                <h1 className="contact-heading">CONTACT</h1>
            </div>
        </div>
    </div>
  )
}

export default Home;