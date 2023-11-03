import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./DashView.css";
import Card from "../Card/Card";


const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <div key={index} className="dashCardContainer">
              <div className="dashCardHeading flex-sb">
                <div className="leftView">
                  <span>
                      {elem[index]?.title} {elem[index]?.value?.length}
                  </span>
                </div>
                <div className="rightView" style={{ marginRight: "10px" }}>
                  <FontAwesomeIcon icon={faPlus} /> <span style={{ letterSpacing: "10px" }}> {elem[index]?.priority}</span>
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {elem[index]?.value?.map((elem, ind) => {
                  return (
                    <Card id={elem.id} title={elem.title} tag={elem.tag} status= {elem.status} priority= {elem.priority}/>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default DashView;