import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socialMediaLinks = [
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/azhar-syarif-463ab8292/',
  },
  {
    name: 'GitHub',
    icon: faGithub,
    url: 'https://github.com/azharsyarif',
  },
  {
    name: 'Instagram',
    icon: faInstagram,
    url: 'https://www.instagram.com/ahzrasyarif_/',
  },
];

const SocialMedia = () => {
  return (
    <section id="social-media" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Follow Me</h2>
        <div className="flex justify-center space-x-6">
          {socialMediaLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
              aria-label={social.name}
            >
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
