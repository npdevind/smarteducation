import OurCourses from "../components/OurCourses";

const Home = () => {
  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <div className="text-center mb-5">
          <h2>Our Courses</h2>
          <h5>We Have Courses For Everyone In Every Group</h5>
        </div>
        <div>
          <OurCourses />
        </div>
      </div>
    </>
  );
};

export default Home;
