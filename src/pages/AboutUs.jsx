
import { Link } from 'react-router-dom';
import ContactUs from '../components/about us/ContactUs';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - My Gadgets Heaven</title>
      </Helmet>
      <div className="mx-6 md:mx-10 my-10">
        <header className="mt-8 space-y-3 text-center">
          <h3 className='font-bold text-3xl md:text-4xl'>About Gadget Haven</h3>
          <p className='text-xl'>Your Trusted Source for Affordable Tech Gadgets</p>
        </header>
        <section className="mt-8 space-y-3">
          <h2 className='text-3xl font-semibold'>Our Story</h2>
          <p>
            Founded in 2024, Gadget Haven was created with a mission to make technology accessible to everyone.
            We started as a small team of tech enthusiasts determined to bridge the gap between people and the latest tech innovations.
            Today, we proudly serve thousands of customers across the globe, providing a diverse range of gadgets at affordable prices.
          </p>
        </section>
        <section className="flex flex-col md:flex-row mt-8 gap-6">
          <div className="flex-1 space-y-3">
            <h2 className='text-3xl font-semibold'>Our Mission</h2>
            <p>To bring cutting-edge gadgets within reach for everyone, without compromising on quality.</p>
          </div>
          <div className="flex-1 space-y-3">
            <h2 className='text-3xl font-semibold'>Our Values</h2>
            <ul>
              <li><strong>Customer First</strong> – Your satisfaction is our priority.</li>
              <li><strong>Innovation</strong> – We constantly update our catalog with the latest tech products.</li>
              <li><strong>Sustainability</strong> – We are committed to eco-friendly practices and sustainable sourcing.</li>
            </ul>
          </div>
        </section>
        <div className='mt-8'>
          <section className="space-y-3">
            <h2 className='text-3xl font-semibold'>Meet Our Team</h2>
            <p>We’re a passionate group of tech lovers and customer service professionals dedicated to bringing you the best experience at Gadget Haven.</p>
            <img src='https://i.ibb.co.com/2ny8BXN/our-team.jpg' alt="Our Team" className="w-full rounded-3xl object-cover" />
          </section>
          <div>
            <ContactUs></ContactUs>
          </div>
        </div>
        <section className="mt-8 space-y-3 text-center">
          <h2 className='text-3xl font-semibold'>Ready to Discover the Latest in Tech?</h2>
          <p>Explore our collection and find the perfect gadget for you or your loved ones.</p>
          <button className="btn text-lg text-white rounded-3xl bg-[#9538E2]"><Link to='/'>Explore Now</Link></button>
        </section>
      </div>

    </div>
  );
};

export default AboutUs;