

const NavLink = ({ title }) => {
  return (
    <div
      className="block cursor-pointer py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </div>
  );
};

export default NavLink;
