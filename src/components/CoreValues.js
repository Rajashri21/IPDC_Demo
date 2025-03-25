import 'bootstrap/dist/css/bootstrap.min.css';

export default function CoreValues() {
  const values = [
    { icon: '/icons/integrity.png', title: 'Integrity', description: 'Displaying the highest level of Integrity in the way we conduct our business.' },
    { icon: '/icons/demonstrate.png', title: 'Demonstrate', description: 'Demonstrating a strong Will to Win in the marketplace.' },
    { icon: '/icons/diversity.png', title: 'Diversity', description: 'Promoting Diversity in the workplace and community.' },
    { icon: '/icons/teamwork.png', title: 'Teamwork', description: 'Working together to achieve common goals.' },
    { icon: '/icons/integrity.png', title: 'Collaboration', description: 'Harnessing the power of teamwork for success.' },
    { icon: '/icons/technology.png', title: 'Technology', description: 'Leveraging technology for innovation and growth.' },
    { icon: '/icons/corporate.png', title: 'Corporate', description: 'Setting the standard for corporate responsibility.' },
    { icon: '/icons/digital.png', title: 'Digital', description: 'Embracing digital transformation for the future.' },
  ];

  return (
    <div className="container text-center py-5 mt-4">
      <h2 className="mb-3 fw-bold">Creating Extraordinary Customer Experience</h2>
      <p className="mb-5 text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi
        dignissim eu pharetra consequat montes, sagittis.
      </p>
      <div className="row g-4 justify-content-center">
        {values.map((value, index) => (
          <div key={index} className="col-10 col-sm-6 col-md-4 col-lg-3">
            <div className="card border-0 shadow-sm p-4 text-center h-100">
              <img 
                src={value.icon} 
                alt={value.title} 
                className="mb-3 mx-auto" 
                style={{ width: '60px', borderRadius: '50%' }} 
              />
              <h5 className="fw-bold">{value.title}</h5>
              <p className="text-muted">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
