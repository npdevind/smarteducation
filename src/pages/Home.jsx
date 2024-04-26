import AboutUs from "../components/AboutUs";
import OurCourses from "../components/OurCourses";

const Home = () => {
  return (
    <>
      <div style={{ marginTop: "8rem" }}>
        <div className="text-center mb-5">
          <h2>Our Courses</h2>
          <h5>We Have Courses For Everyone In Every Group</h5>
        </div>
        <div className="container mb-5" style={{ height: "35rem" }}>
          <OurCourses />
        </div>

        <div className="text-center mb-5">
          <h2>About Us</h2>
          <h5>What is Unique and Different About Us</h5>
        </div>
        <div className="container mb-5" style={{ height: "32rem" }}>
          <AboutUs />
        </div>
      </div>
    </>
  );
};

export default Home;
