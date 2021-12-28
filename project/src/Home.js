export default function Homepage() {
    return (
        <>
            <div className="sequence">
                <div className="seq-preloader">
                    <svg width="39" height="16" viewBox="0 0 39 16" xmlns="http://www.w3.org/2000/svg" className="seq-preload-indicator"><g fill="#F96D38"><path className="seq-preload-circle seq-preload-circle-1" d="M3.999 12.012c2.209 0 3.999-1.791 3.999-3.999s-1.79-3.999-3.999-3.999-3.999 1.791-3.999 3.999 1.79 3.999 3.999 3.999z"/><path className="seq-preload-circle seq-preload-circle-2" d="M15.996 13.468c3.018 0 5.465-2.447 5.465-5.466 0-3.018-2.447-5.465-5.465-5.465-3.019 0-5.466 2.447-5.466 5.465 0 3.019 2.447 5.466 5.466 5.466z"/><path className="seq-preload-circle seq-preload-circle-3" d="M31.322 15.334c4.049 0 7.332-3.282 7.332-7.332 0-4.049-3.282-7.332-7.332-7.332s-7.332 3.283-7.332 7.332c0 4.05 3.283 7.332 7.332 7.332z"/></g></svg>
                </div>
            </div>


            <nav>
            <div className="logo">
                <img src="img/logo.png" alt="" />
            </div>
            <div className="mini-logo">
                <img src="img/mini_logo.png" alt="" />
            </div>
            <ul>
                <li><a href="#1"><i className="fa fa-home"></i> <em>Home</em></a></li>
                <li><a href="#2"><i className="fa fa-user"></i> <em>About</em></a></li>
                <li><a href="#3"><i className="fa fa-pencil"></i> <em>Entries</em></a></li>
                <li><a href="#4"><i className="fa fa-image"></i> <em>Work</em></a></li>
                <li><a href="#5"><i className="fa fa-envelope"></i> <em>Contact</em></a></li>
            </ul>
            </nav>
                
            <div className="slides">
                <div className="slide" id="1">
                    <div className="content first-content">
                    <div className="container-fluid">
                        <div className="col-md-3">
                            <div className="author-image"><img src="img/author_image.png" alt="" /></div>
                        </div>
                        <div className="col-md-9">
                            <h2>Mingalar par</h2>
                            <p>Lorem ipsum <em>dolor sit amet</em>, consectetur adipiscing elit. <em>Sed vehicula blandit augue,</em> eu maximus odio tempus vitae.</p>
                            <div className="main-btn"><a href="#2">Read More</a></div>
                            <div className="fb-btn"><a href="https://www.facebook.com/templatemo/" target="_blank">Our FB Page</a></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="slide" id="2">
                    <div className="content second-content">
                        <div className="container-fluid">
                            <div className="col-md-6">
                                <div className="left-content">
                                    <h2>About Us</h2>
                                    <p>Please tell your friends about templatemo website. A variety of free CSS templates are available for immediate downloads.</p> 
                                    <p>Phasellus vitae faucibus orci. Etiam eleifend orci sed faucibus semper. Cras varius dolor et augue fringilla, eu commodo sapien iaculis. Donec eget dictum tellus. <a href="#">Curabitur</a> a interdum diam. Nulla vestibulum porttitor porta.</p>
                                    <p>Nulla vitae interdum libero, vel posuere ipsum. Phasellus interdum est et dapibus tempus. Vestibulum malesuada lorem condimentum mauris ornare dapibus. Curabitur tempor ligula et <a href="#">placerat</a> molestie.</p>
                                    <p>Aliquam efficitur eu purus in interdum. <a href="#">Etiam tincidunt</a> magna ex, sit amet lobortis felis bibendum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                <div className="main-btn"><a href="#3">Read More</a></div>
                            </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right-image">
                                <img src="img/about_image.jpg" alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide" id="3">
                    <div className="content third-content">
                        <div className="container-fluid">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="first-section">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="left-content">
                                                        <h2>Quisque commodo quam</h2>
                                                        <p>Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum. Maecenas rhoncus nibh in mauris lobortis, a maximus diam faucibus. In et eros urna. Suspendisse potenti. Pellentesque commodo, neque nec molestie tempus, purus ante feugiat augue.</p>
                                                        <div className="main-btn"><a href="#4">Continue Reading</a></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="right-image">
                                                        <img src="img/first_service.jpg" alt="first service" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="second-section">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="left-image">
                                                        <img src="img/second_service.jpg" alt="second service" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="right-content">
                                                        <h2>Maecenas eu purus eu sapien</h2>
                                                        <p>Sed vitae felis in lorem mollis mollis eget in leo. Donec commodo, ex nec rutrum venenatis, nisi nisl malesuada magna, sed semper ipsum enim a ipsum. Aenean in ante vel mi molestie bibendum. Quisque sit amet lacus in diam pretium faucibus. Cras vel justo lorem.</p>
                                                        <div className="main-btn"><a href="#4">Continue Reading</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide" id="4">
                    <div className="content fourth-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="img/first_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                                <div className="hover-content">
                                                    <h2>Number One</h2>
                                                    <p>Quisque sit amet lacus in diam pretium faucibus. Cras vel justo lorem.</p>
                                                </div>
                                            </div></a>
                                            <div className="image">
                                                <img src="img/first_item.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="img/second_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                                <div className="hover-content">
                                                    <h2>Number Two</h2>
                                                    <p>Donec eget dictum tellus. Curabitur a interdum diam. Nulla vestibulum porttitor porta.</p>
                                                </div>
                                            </div></a>
                                            <div className="image">
                                                <img src="img/second_item.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="img/third_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                                <div className="hover-content">
                                                    <h2>Number Three</h2>
                                                    <p>Cras varius dolor et augue fringilla, eu commodo sapien iaculis.</p>
                                                </div>
                                            </div></a>
                                            <div className="image">
                                                <img src="img/third_item.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="img/fourth_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                                <div className="hover-content">
                                                    <h2>Number Four</h2>
                                                    <p>Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum.</p>
                                                </div>
                                            </div></a>
                                            <div className="image">
                                                <img src="img/fourth_item.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="img/fifth_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                                <div className="hover-content">
                                                    <h2>Fifth Item</h2>
                                                    <p>Donec commodo, ex nec rutrum venenatis, nisi nisl malesuada magna.</p>
                                                </div>
                                            </div></a>
                                            <div className="image">
                                                <img src="img/fifth_item.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="img/sixth_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                                <div className="hover-content">
                                                    <h2>Sixth Item</h2>
                                                    <p>Maecenas dapibus neque sed nisl consectetur, id semper nisi egestas.</p>
                                                </div>
                                            </div></a>
                                            <div className="image">
                                                <img src="img/sixth_item.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="img/seventh_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                                <div className="hover-content">
                                                    <h2>Number Seven</h2>
                                                    <p>Etiam aliquet, est id varius fringilla, eros libero pellentesque lectus.</p>
                                                </div>
                                            </div></a>
                                            <div className="image">
                                                <img src="img/seventh_item.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="img/eight_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                                <div className="hover-content">
                                                    <h2>Number Eight</h2>
                                                    <p>Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum.</p>
                                                </div>
                                            </div></a>
                                            <div className="image">
                                                <img src="img/eight_item.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="img/ninth_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                                <div className="hover-content">
                                                    <h2>Number Nine</h2>
                                                    <p>Orci varius natoque penatibus et magnis dis parturient montes.</p>
                                                </div>
                                            </div></a>
                                            <div className="image">
                                                <img src="img/ninth_item.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="img/fifth_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                                <div className="hover-content">
                                                    <h2>Number Ten</h2>
                                                    <p>Vestibulum augue ex, finibus sit amet nisi id, maximus ultrices ipsum.</p>
                                                </div>
                                            </div></a>
                                            <div className="image">
                                                <img src="img/fifth_item.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="img/first_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                                <div className="hover-content">
                                                    <h2>Eleventh Item</h2>
                                                    <p>Cras varius dolor et augue fringilla, eu commodo sapien iaculis.</p>
                                                </div>
                                            </div></a>
                                            <div className="image">
                                                <img src="img/first_item.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="img/second_big_item.jpg" data-lightbox="image-1"><div className="hover-effect">
                                                <div className="hover-content">
                                                    <h2>Twelvth Item</h2>
                                                    <p>Etiam tincidunt magna ex, sit amet lobortis felis bibendum id.</p>
                                                </div>
                                            </div></a>
                                            <div className="image">
                                                <img src="img/second_item.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide" id="5">
                    <div className="content fifth-content">
                        <div className="container-fluid">
                            <div className="col-md-6">
                                <div id="map">
                                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945" width="100%" height="500px" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <form id="contact" action="" method="post">
                                    <div className="row">
                                        <div className="col-md-12">
                                        <fieldset>
                                            <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required="" />
                                        </fieldset>
                                        </div>
                                        <div className="col-md-12">
                                        <fieldset>
                                            <input name="email" type="email" className="form-control" id="email" placeholder="Your email..." required="" />
                                        </fieldset>
                                        </div>
                                        <div className="col-md-12">
                                        <fieldset>
                                            <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject..." required="" />
                                        </fieldset>
                                        </div>
                                        <div className="col-md-12">
                                        <fieldset>
                                            <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required=""></textarea>
                                        </fieldset>
                                        </div>
                                        <div className="col-md-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="btn">Send Now</button>
                                        </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="content">
                    <p>Copyright &copy; 2018 Your Company . <a href="http://www.templatemo.com/tm-512-moonlight">Moonlight</a> by <a href="http://www.html5max.com" target="_parent">HTML5 Max</a></p>
                </div>
            </div>
        </>
    )
}