import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
         <Link className="mr-8" to="/">Subarno is a good boy. He will be a good developer in future. He will prove himself to his parents and his loved ones....</Link>
         <Link className="mr-8" to="/">Subarno is a good boy. He will be a good developer in future. He will prove himself to his parents and his loved ones.... </Link>
         <Link className="mr-8" to="/">Subarno is a good boy. He will be a good developer in future. He will prove himself to his parents and his loved ones....</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
