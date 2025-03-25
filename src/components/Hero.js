// components/Hero.js
import Image from 'next/image';



const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Chase Your Dream with us</h1>
            <p>The harder you work for something. the greater you'll feel when you achieve it.</p>
            <div className="btn-container">
            <button className="btn-apply btn-custom px-4 py-2">APPLY ONLINE</button>
            <button className="btn-loan btn-custom px-4 py-2">LOAN CALCULATOR</button>
            </div>
            
          </div>
          <div className="family-picture col-md-6">
            <Image src="/Big.png" alt="Hero Image" layout="responsive" width={710} height={682}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
