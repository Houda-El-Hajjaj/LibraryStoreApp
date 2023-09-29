import React from 'react';
import './About.css'; // Import your CSS file here
import { Link } from 'react-router-dom';

const articles = [
    {
      title: 'Why getting lost in a book is so good for you, according to science',
      content: 'Whether you’re the reader who rips through a new book each week or the one still slog...',
      image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2018_29/2504731/180720-read-book-good-health-ac-417p.jpg',
      pagelink: 'https://www.nbcnews.com/better/pop-culture/why-getting-lost-book-so-good-you-according-science-ncna893256'
    },
    {
      title: 'Importance of Books in Our Life',
      content: 'Books are packed with knowledge, they give you life lessons, and they teac...',
      image: 'https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/09/19165327/Imagination-1.gif',
      pagelink: 'https://leverageedu.com/blog/importance-of-books-in-our-life/'
    },
    {
      title: 'Most Popular Articles on Reading Books',
      content: 'I love reading books. I read 51 books in 2018 and 55 books in 2019...',
      image: 'https://miro.medium.com/v2/resize:fit:1100/0*aUKWtza5U2oNzdd0',
      pagelink: 'https://medium.com/authorvinod/my-popular-articles-on-reading-books-55ab82c575eb'
    },
  ];
  

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
      <h1>About Our Library Store</h1>
      <p>Welcome to our online library store, 
        where we provide book enthusiasts with access to a vast collection of literary treasures. 
        Our mission is to make the joy of reading easily accessible to everyone.</p>
      
      <h2>Our Story</h2>
      <p>Founded in [Year], our library store has been serving readers for 
        [Number of years] years. We started as a small brick-and-mortar bookstore and 
        have since evolved into a thriving online platform, offering a wide range of books in various genres.</p>
      
      <h2>Our Mission</h2>
      <p>Our mission is to promote literacy, learning, and the love of reading. 
        We believe that books have the power to inspire, educate, and entertain, 
        and we are committed to making them accessible to readers of all ages and backgrounds.</p>
      
      <h2>Thank You for Choosing Us!</h2>
      <p>We appreciate your support and look forward to being 
        your trusted source for all your reading needs. Happy reading!</p>
    
    </div>

      <h2>Featured Articles</h2>
      <div className="article-list">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-text">
              <Link to={article.pagelink}>
              <h3>{article.title}</h3>
              </Link>
              <p>{article.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
