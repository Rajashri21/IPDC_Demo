import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-4 py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="/image-removebg-preview (10) 1.png" // Replace with your logo path
            alt="IPDC Finance Logo"
            width={120}
            height={40}
          />
        </Link>

        {/* Navigation Links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-4">
          <li className="nav-item">
            <Link href="/retail" className="nav-link text-uppercase fw-bold">Retail</Link>
          </li>
          <li className="nav-item">
            <Link href="/sme" className="nav-link text-uppercase fw-bold">SME</Link>
          </li>
          <li className="nav-item">
            <Link href="/corporate" className="nav-link text-uppercase fw-bold">Corporate</Link>
          </li>
          <li className="nav-item">
            <Link href="/about-us" className="nav-link text-uppercase fw-bold">About Us</Link>
          </li>
          <li className="nav-item">
            <Link href="/covid-19" className="nav-link text-uppercase fw-bold">Covid 19</Link>
          </li>
          <li className="nav-item">
            <Link href="/campaigns" className="nav-link text-uppercase fw-bold">Campaigns</Link>
          </li>
        </ul>

        {/* Search Icon and Button */}
        <div className="d-flex align-items-center gap-3">
          <FaSearch size={20} color="#ED017F" />
          <button className="btn btn-primary rounded-pill px-4" style={{ backgroundColor: '#ED017F', border: 'none' }}>
            iService
          </button>
        </div>
      </div>
    </nav>
  );
}
