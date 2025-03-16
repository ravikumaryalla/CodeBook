import classes from "./Testimonials.module.css";

const testimonialsData = [
  {
    name: "Alice Johnson",
    role: "Software Engineer",
    testimonial:
      "Python Crash Course was a game-changer for me! The hands-on approach made learning so much easier. Highly recommend!",
    rating: 5,
    tag: "Very easy to learn",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Mark Thompson",
    role: "Full Stack Developer",
    testimonial:
      "Eloquent JavaScript is the best book I've read on JavaScript fundamentals. The examples are clear and easy to follow!",
    rating: 5,
    tag: "Solid foundation for projects",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Sophia Patel",
    role: "Frontend Developer",
    testimonial:
      "I struggled with JavaScript until I read You Don’t Know JS. This book truly deepened my understanding!",
    rating: 4,
    tag: "Deep dive into JavaScript",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "David Miller",
    role: "Backend Developer",
    testimonial:
      "Clean Code helped me write more maintainable and efficient code. Every developer should read this book at least once!",
    rating: 5,
    tag: "Best coding practices",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className={classes.testimonialContainer}>
      <div className={classes.testimonialHeader}>
        <p>Students About CodeBook</p>
        <hr />
      </div>
      <div className={classes.testimonials}>
        {testimonialsData.map((item, index) => {
          return (
            <div className={classes.testimonialCard} key={index}>
              <div className={classes.testimonialsHeading}>
                <p>{item.tag}</p>
              </div>
              <div className={classes.testimonialsSubHeading}>
                {item.testimonial}
              </div>
              <div className={classes.profile}>
                <div className={classes.profileImage}>
                  <img src={item.image} alt="testimonial-image" />
                </div>
                <div className={classes.profileInfo}>
                  <div className={classes.profileName}>{item.name}</div>
                  <div className={classes.profileRole}>{item.role}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
