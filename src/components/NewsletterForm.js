

export default function NewsletterForm() {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-title">Newsletter</h2>
      <p className="newsletter-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis aliquam arcu lacus.
      </p>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Your email"
          className="newsletter-input"
          required
        />
        <button type="submit" className="newsletter-button">
          Subscribe
        </button>
      </form>
    </div>
  );
}
