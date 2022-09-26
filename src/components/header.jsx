import Dropdown from "react-bootstrap/Dropdown";
import { HeaderContainer, StyledH1, HeaderDropDownBtn } from "./Toolkit";

// todo - add data to the context and use data location here
const Header = () => {
  return (
    <>
      <HeaderContainer className="p-1 d-flex align-items-stretch">
        <StyledH1 className="m-auto d-flex justify-content-center">
          Pembrey - Live wind tracker
        </StyledH1>
        {/* put location options here */}

        {/* <Dropdown className="d-flex">
          <HeaderDropDownBtn>{ddLabel}</HeaderDropDownBtn>
          <Dropdown.Menu>
            {ddTitles.map((titleArr, index) => (
              <Dropdown.Item
                key={titleArr[1]}
                onClick={() => selectApi(titleArr)}
              >
                {titleArr[0]}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown> */}
      </HeaderContainer>
    </>
  );
};

export default Header;
