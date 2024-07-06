import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-4 mb-6">
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-outline w-full">
        <FcGoogle className="text-2xl" />
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
        <BsGithub className="text-2xl" />
          Login with GitHub
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-2xl mb-5">Find Us On</h2>
        <a className="p-4 flex gap-2 border rounded-t-lg" href="">
            <CiFacebook className="text-blue-800 text-2xl" />
            Facebook
        </a>
        <a className="p-4 flex gap-2 border-x" href="">
            <BsTwitterX className="text-black-600 text-xl" />
            Twitter/X
        </a>
        <a className="p-4 flex gap-2 border rounded-b-lg" href="">
            <FaInstagram  className="text-orange-800 text-2xl" />
            Instagram
        </a>
      </div>
      {/* Q-Zone */}
      <div className="p-4 space-y-4 mb-6">
        <h2 className="text-2xl">Q Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
