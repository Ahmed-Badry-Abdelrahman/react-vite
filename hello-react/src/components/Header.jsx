import ToggleBtn from "../Context/ToggleBtn";

const Header = () => {
  return (
    <div className="display-flex jc-between align-items">
      <p>Header</p>
      {<ToggleBtn />}
    </div>
  );
};

export default Header;
