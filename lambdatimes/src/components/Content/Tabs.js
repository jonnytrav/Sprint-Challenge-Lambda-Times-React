import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, i) => {
          return (
            <Tab
              tab={tab}
              selectedTab={props.selectedTab}
              changeSelected={props.changeSelected}
              selectTabHandler={props.selectTabHandler}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  changeSelected: PropTypes.func,
  selectTabHandler: PropTypes.func
};
// Make sure to use PropTypes to validate your types!
export default Tabs;
