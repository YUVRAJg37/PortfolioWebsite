import { useNavigate } from "react-router-dom";
import { Info } from "../Data/Info";
import * as Icons from "react-icons/fa";

function NavBar() {
  const navigate = useNavigate();

  const onClickButton = (link: string, isRoute: boolean) => {
    if (!isRoute) {
      window.open(link, "_blank", "noreferrer");
    } else {
      navigate(link);
    }
  };

  return (
    <nav>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate("./")}
          className="text-white text-xl font-bold p-3 rounded-full bg-black hover:bg-[#1a1a1a] transition flex items-center justify-center"
        >
          <Icons.FaHome size={20} />
        </button>
        <div className="flex space-x-4">
          {Info.links.map((link, index) => {
            const IconComponent = Icons[link.icon as keyof typeof Icons];
            return (
              <button
                key={index}
                className="bg-black text-white p-3 rounded-full hover:bg-[#1a1a1a] transition flex items-center justify-center"
                onClick={() => onClickButton(link.url, link.route)}
              >
                {IconComponent && <IconComponent size={18} />}{" "}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
