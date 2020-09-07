import React, { useState } from "react";
import { NavigationWrapper, NavigationList, NavigationItem } from "./style";

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState("About Me");

  const onClickMenu = (menuName: string) => {
    setActiveMenu(menuName);
  };
  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationItem
          active={Boolean(activeMenu === "About Me")}
          onClick={() => onClickMenu("About Me")}
        >
          About Me
        </NavigationItem>
        <NavigationItem
          active={Boolean(activeMenu === "Resume")}
          onClick={() => onClickMenu("Resume")}
        >
          Resume
        </NavigationItem>
        <NavigationItem
          active={Boolean(activeMenu === "Career")}
          onClick={() => onClickMenu("Career")}
        >
          Career
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;
