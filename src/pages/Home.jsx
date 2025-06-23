import React from 'react'
import Navbar from '../component/Navbar'
import '../pages/Home.css'
import frame83 from  '../images/Frame83.png'
import frame84 from  '../images/Frame84.png'
import StayCard from '../card/Staycard';
import room from '../images/Frame78.png';
import tree from '../images/Frame79.png';
import hut from '../images/Frame80.png';
import tent from '../images/Frame81.png';
import family from '../images/family.jpg';
import couple from '../images/couple.jpg';
import friends from '../images/friends.jpg';
import collage from '../images/college.jpg';
import day from '../images/daytrip.jpg';
import trekking from '../images/trekking.jpg';
import offroad from '../images/offroad.jpg';
import meditation from '../images/meditation.jpg';
import daposter from '../images/daposter.png';
import camping from '../images/camping.jpg';
import natural from '../images/naturalwalk.jpg';
import water from '../images/waterfall.jpg';
import stonebalance from '../images/stonebalance.jpg';
import rock from '../images/rockpoint.jpg';
import lake from '../images/lakeview.png';
import kandi from '../images/900kandi.png';

const Home = () => {
  const cardData = [
    {
      image: room,
      title: 'Room',
      description:
        'Our well-appointed rooms offer cozy, private spaces for relaxation, ideal for families and couples.',
    },
    {
      image: tree,
      title: 'Tree Hut',
      description:
        'Perched high in the trees, our hut offers a unique stay with stunning forest views – ideal for adventurers and nature lovers.',
    },
    {
      image:hut,
      title: 'Hut',
      description:
        'Feel grounded in nature in our rustic huts, giving you a simple yet charming stay close to the earth.',
    },
    {
      image: tent,
      title: 'Tents',
      description:
        'For the true adventurer, our tenting options bring you even closer to the wild, offering an authentic camping experience under the stars.',
    },
  ];

  const cardDatas = [
    {
      image: trekking,
      title: 'Trekking',
      description:
        'Embark on guided treks through Wayanad’s dense forests, misty hills, and scenic trails. Discover hidden gems, breathtaking viewpoints, and immerse yourself in the beauty of untouched nature.',
    },
    {
      image: offroad,
      title: 'Offroad Jeep Safari',
      description:
        'Experience the thrill of off-road adventures as we take you on a rugged ride through wild terrains, lush plantations, and serene landscapes. A perfect mix of adrenaline and scenic exploration.',
    },
    {
      image:meditation,
      title: 'Meditation and Mindfulness',
      description:
        'Find your inner peace amidst the soothing sounds of nature. Our guided meditation sessions help you disconnect from the chaos and reconnect with yourself in a serene environment.',
    },
    {
      image: stonebalance,
      title: 'Stone Balancing Art',
      description:
        'Channel your focus and creativity with our stone-balancing sessions. This mindful activity teaches patience and helps you align with nature’s rhythm as you stack stones into delicate art forms.',
    },
    {
      image: daposter,
      title: 'Dapostar Training',
      description:
      'Learn the ancient art of creating eco-friendly dapo stars. This hands-on activity combines creativity, fun, and sustainability, leaving you with unique souvenirs to cherish.'    },
    {
      image: camping,
      title: 'Camping',
      description:'Spend a night under the stars with our eco-friendly camping experiences. Surrounded by the sounds of nature, enjoy bonfires, storytelling, and the simple joys of life in the wild.'
    },
    {
      image: natural,
      title: 'Natural Walks',
      description:'Explore the flora and fauna of Wayanad on our guided natural walks. Ideal for nature enthusiasts, these walks help you connect deeply with the environment and its delicate ecosystems.'
    },
    {
      image: water,
      title: 'Waterfall Exploration',
      description:'Discover the magic of cascading waterfalls hidden in the forest. Dip into crystal-clear waters and rejuvenate your soul with nature’s purest elements.'
    },
  ]
  return (
    <>
    <div className='containers'>
    <div className='home'>
          
        <Navbar/>
        <div className='txt-explor'>
        <h1>Explore.{<br></br>}Experience. Evolve.</h1>
        <button className="view" >View Accomadation --</button>
        </div>
    </div>
    </div>
    <div className='containers'>
    <div className='second-sect'>
        <div className='txt-para'>
            <h3 style={{color:'#127669'}}>A Nature-Inspired Travel Company</h3>
            <h2>Who We Are</h2>
            <div className='text-para'>
            <p>SueloTribe is a nature-inspired travel company dedicated to promoting responsible tourism. We blend adventure, mindfulness, and eco-friendly experiences to create meaningful connections with the environment. Rooted in the heart of Wayanad’s lush landscapes, we offer trekking, camping, experimental stays, and mindful programs to inspire sustainable living and foster unforgettable memories.</p>
            </div>
            <button className="btn-3" >Explore package</button>
        </div>
        <div>
            <img src={frame83} height="451" width="640"></img>
        </div>
    </div>
    </div>
    <div className='containers'>
    <div className='container'>
      <div>
          <p>Located in the heart of<span> Wayanad’s stunning landscape, SueloTribe</span> offers you an immersive experience in the lap of nature. Surrounded by cardamom plantations, dense forests, and misty hills, our retreat is perfect for anyone looking to escape the hustle and bustle of city life.</p>
      </div>
    </div>
    <div className='ourvision'>
        <h3>Our Vision</h3>
        <p>To lead the way in responsible tourism by fostering deep connections between people and nature, creating a sustainable and mindful travel community that respects and preserves the planet’s beauty.</p>
    </div>
    <div className='list-item'>
      <div>
          <img src={frame84} height="451" width="640"></img>
      </div>
      <div className='list'>
        <h2>Our Mission</h2>
        <ul>
          <li>To promote eco-friendly travel practices and provide immersive experiences that celebrate nature’s wonders.</li>
          <li> To offer unique adventures, mindful programs, and experimental stays that inspire a deeper respect for the environment.</li>
          <li> To contribute to the preservation of Wayanad’s natural heritage and also planet by educating and engaging our guests in sustainable tourism practices.</li>
          <li>To create a community of travelers who carry the spirit of responsible tourism into their everyday lives.</li>
        </ul>
      </div>
    </div>
    <div className='younggirl'>
      <div >
      <h4>NOW IS <span className="outlined"> YOUR</span> TIME</h4>
      <p>Escape to nature, create unforgettable memories, and let every trip be a story worth telling. Book your adventure today!"</p>
      <button className="book-now">Book Now →</button>
      </div>
    </div>
    <section className="stay-options">
          <h2>Stay Options</h2>
          <p >Explore unique accommodation options tailored to make your stay memorable and comfortable:</p>
          <div className="card-container">
            {cardData.map((card, index) => (
              <StayCard
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>
  <div className="cater-section">
        <div className='mainhead'>
            <h2>Who We Cater To</h2>
            <p>At SueloTribe, we welcome</p>
        </div>
    <div className="cards-grid">
      <div className="cards">
        <img src={family} alt="Families" />
        <h3>Families</h3>
        <p>Enjoy a family getaway filled with nature walks, wildlife spotting, and bonding over campfires.</p>
      </div>
      <div className="cards">
        <img src={couple} alt="Couples" />
        <h3>Couples</h3>
        <p>Find romantic seclusion with scenic views and peaceful surroundings, ideal for rekindling your connection.</p>
      </div>
      <div className="cards">
        <img src={friends} alt="Families" />
        <h3>Bachelors & Friends Groups</h3>
        <p>Take a break from routine and create unforgettable memories with friends, exploring trails and gathering around bonfires.</p>
      </div>
      <div className="cards">
        <img src={collage} alt="Families" />
        <h3>College Trips</h3>
        <p>A perfect destination for college groups, SueloTribe offers adventure, nature, and team activities to bring students closer to nature.</p>
      </div>
      <div className="cards">
        <img src={day} alt="Families" />
        <h3>Day Trips</h3>
        <p>Short on time? Plan a day trip to experience the essence of Wayanad, complete with guided nature walks, scenic viewpoints, and refreshing picnic spots.</p>
      </div>
    </div>
  </div>
  <div className='manmount'>
      <div>
      <h4>Activities To Elevate Your Stay</h4>
      <p>From trekking and river crossing to bird watching and campfires, our variety of activities will give you the opportunity to connect with nature and experience the wild beauty of Wayanad like never before.</p>
      <p>Come, join SueloTribe and become part of a community that celebrates responsible tourism and sustainable living. Let us show you the wonders of Wayanad—your unforgettable adventure awaits!</p>
      <button className="book-now">Book Now →</button>
      </div>
  </div>
  <section className="stay-option">
          <h2>Our Activities</h2>
          <div className="card-containers">
            {cardDatas.map((card, index) => (
              <StayCard
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                showButton={false}
              /> 
            ))}
          </div>
  </section>
  </div>
  <div className='containers'>
   <section className="rooms">
    <p className="subtitle">Plan Your Next Stay</p>
    <h1>Experience the Great{<br></br>}Outdoors</h1>
    <p className="description">From rooms to huts - find the perfect spot for your next getaway</p>
    <div className="nav-row">
      <div className="nav-links">
        <a href="#" className="active">All</a>
        <a href="#">Rooms</a>
        <a href="#">Tree Huts</a>
        <a href="#">Huts</a>
        <a href="#">Tents</a>
      </div>
    </div>
  <section className="card-grids">
    <div className="card">
      <img src={rock} alt="Rock Point Site"/>
      <div className="card-body">
        <h2>Rock Point Site</h2>
        <p>₹ 900 / a day</p>
        <button>View Site →</button>
      </div>
    </div>
    <div className="card">
      <img src={lake} alt="Pookode Lake View"/>
      <div className="card-body">
        <h2>Pookode Lake View</h2>
        <p>₹ 1200 per person</p>
        <button>View Site →</button>
      </div>
    </div>
    <div className="card">
      <img src={kandi} alt="900 Kandi Stay"/>
      <div className="card-body">
        <h2>900 Kandi Stay</h2>
        <p>₹ 900 / a night</p>
        <button>View Site →</button>
      </div>
    </div>
  </section>
   </section>
      </div>
  </>
  )
}
export default Home
