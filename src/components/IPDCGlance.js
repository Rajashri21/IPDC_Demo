import Image from 'next/image';


export default function IPDCGlance() {
  return (
    <div className="ipdc-container">
      <div className="ipdc-image">
        <Image
          src="/images/ipdc-plant.png" // Replace with the correct path
          alt="IPDC Plant"
          width={600}
          height={600}
        />
      </div>
      <div className="ipdc-content">
        <h2 className="ipdc-title">IPDC AT A GLANCE</h2>
        <p className="ipdc-description">
          IPDC Finance Limited (previously known as "Industrial Promotion and Development
          Company of Bangladesh Limited") is the first private sector financial institution of
          the country established in 1981 by a distinguished group of shareholders namely
          International Finance Corporation (IFC), USA, German Investment and Development Company
          (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED), Switzerland,
          Commonwealth Development Corporation (CDC), UK and the Government of Bangladesh.
        </p>
        <a href="#" className="ipdc-readmore">
          Read More <span>&#8594;</span>
        </a>
      </div>
    </div>
  );
}