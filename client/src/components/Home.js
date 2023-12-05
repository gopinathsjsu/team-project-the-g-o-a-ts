import React, { useContext } from "react";

import { Helmet } from "react-helmet";

import FeatureCard from "./feature-card";
import GalleryCard3 from "./gallery-card3";
import Question from "./question";
import "../css/home.css";
import { AuthContext } from "../contexts/AuthProvider";

const Home = (props) => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="home-container">
      <Helmet>
        <title>MovieClub</title>
        <meta property="og:title" content="Movie Club" />
      </Helmet>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">Join the Movie Theater Club</h1>
            <span className="home-hero-sub-heading">Experience the best movies in town</span>
            <div className="home-btn-group">
              <button className="home-hero-button1 button">Get Started</button>
              <button className="home-hero-button2 button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container02">
            <span className="home-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">About Movie Theater Club</h2>
            <span className="home-details-sub-heading">
              Movie Theater Club is a revolutionary application that brings together movie enthusiasts and offers
              exclusive benefits such as early access to tickets, special screenings, and discounts on concessions. With
              our app, you can easily browse movie showtimes, book tickets, and stay updated with the latest releases.
              Join us today and elevate your movie-going experience!
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1577382144834-8a80d92b925c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTMzNjIyMHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container03">
              <span className="home-text03 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">Discover the Benefits</h2>
              <span className="home-features-sub-heading">
                Unlock a world of exclusive features and perks with our Movie Theater Club application.
              </span>
            </div>
            <div className="home-container04">
              <FeatureCard
                Heading="Movie Recommendations"
                SubHeading="Get personalized movie recommendations based on your preferences and viewing history."
              ></FeatureCard>
              <FeatureCard
                Heading="Ticket Booking"
                SubHeading="Easily book movie tickets online with just a few clicks."
              ></FeatureCard>
              <FeatureCard
                Heading="Exclusive Discounts"
                SubHeading="Enjoy exclusive discounts and offers on movie tickets, snacks, and beverages."
              ></FeatureCard>
              <FeatureCard
                Heading="Club Events"
                SubHeading="Attend special club events like movie premieres, Q&amp;A sessions with filmmakers, and film festivals."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-pricing1">
          <div className="home-container05">
            <span className="home-text06 sectionTitle">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="home-pricing-heading heading2">Choose the Perfect Plan for You</h2>
            <span className="home-pricing-sub-heading">
              Unlock a world of movies and exclusive perks with our flexible pricing options
            </span>
          </div>
          <div className="home-container06">
            <div className="home-pricing-card">
              <div className="home-container07">
                <span className="home-text09 heading3">Free</span>
                <span className="home-free-plan-description">
                  Enjoy access to limited movie screenings and events with our free plan
                </span>
              </div>
              <div className="home-container08">
                <span className="home-text10">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container09">
                <div className="home-container10">
                  <span className="home-free-plan-features">Access to select movie screenings</span>
                </div>
                <div className="home-container11">
                  <span className="home-free-plan-features1">Invitations to exclusive club events</span>
                </div>
                <div className="home-container12">
                  <span className="home-free-plan-features2">Discounted concessions</span>
                </div>
                <div className="home-container13">
                  <span className="home-free-plan-features3">Monthly newsletter with movie recommendations</span>
                </div>
              </div>
            </div>
            <div className="home-pricing-card1">
              <div className="home-container14">
                <span className="home-text17 heading3">PREMIUM</span>
                <span className="home-premium-plan-description">
                  Upgrade to our premium plan for more movie options and additional perks
                </span>
              </div>
              <div className="home-container15">
                <span className="home-text18">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-premium-plan-pricing">15</span>
                <span className="home-text21">/ annual</span>
              </div>
              <div className="home-container16">
                <div className="home-container17">
                  <span className="home-text23">All features of FREE plan</span>
                </div>
                <div className="home-container19">
                  <span className="home-premium-plan-features1">Priority seating at select screenings</span>
                </div>
                <div className="home-container20">
                  <span className="home-premium-plan-features2">Exclusive discounts at partner theaters</span>
                </div>
                <div className="home-container21">
                  <span className="home-premium-plan-features3">Early access to ticket sales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">Now Playing</h1>
          <div className="home-container29">
            <GalleryCard3
              image_src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1699464627/amc-cdn/production/2/movies/71000/70972/PosterDynamic/160262.jpg?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTMzNjIxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1695218026/amc-cdn/production/2/movies/69700/69677/PosterDynamic/158471.jpg?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTMzNjIxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1694700678/amc-cdn/production/2/movies/66300/66317/PosterDynamic/157258.jpg?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTMzNjIxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1693920876/amc-cdn/production/2/movies/74100/74142/PosterDynamic/156768.jpg?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTMzNjIxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">Coming Soon</h1>
          <div className="home-container29">
            <GalleryCard3
              image_src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1695831399/amc-cdn/production/2/movies/62400/62364/PosterDynamic/158798.jpg?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTMzNjIxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1697636395/amc-cdn/production/2/movies/73200/73172/PosterDynamic/159468.jpg?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTMzNjIxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1697117324/amc-cdn/production/2/movies/72800/72780/Poster/348916R1.jpg?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTMzNjIxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1696433843/amc-cdn/production/2/movies/73200/73177/PosterDynamic/159108.jpg?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTMzNjIxOHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2" style={{ color: "black!important" }}>
            FAQ
          </h1>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container30">
              <span className="home-text40 sectionTitle">
                <br></br>
              </span>
              <span className="home-text44">
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: " ",
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container31">
              <Question
                Answer="The Movie Theater Club application is a mobile app that allows users to join a club dedicated to movie enthusiasts. It provides various features such as movie recommendations, ticket booking, and exclusive club events."
                Question="What is the Movie Theater Club application?"
              ></Question>
              <Question
                Answer="You can download the Movie Theater Club application from the App Store or Google Play Store. Simply search for 'Movie Theater Club' and click on the download button."
                Question="How can I download the Movie Theater Club application?"
              ></Question>
              <Question
                Answer="Yes, the Movie Theater Club application is free to download and use. However, there may be certain premium features or events that require a subscription or additional payment."
                Question="Is the Movie Theater Club application free?"
              ></Question>
              <Question
                Answer="Yes, the Movie Theater Club application allows you to book movie tickets directly from your mobile device. You can choose your preferred movie, showtime, and seat, and make secure online payments."
                Question="Can I book movie tickets through the Movie Theater Club application?"
              ></Question>
              <Question
                Answer="Yes, as a member of the Movie Theater Club, you will have access to exclusive benefits such as early ticket booking, discounts on concessions, invitations to special screenings, and opportunities to meet industry professionals."
                Question="Are there any exclusive benefits for club members?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
