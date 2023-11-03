import React from 'react';
import './Card.css';

const getPriorityIcon = (priority) => {
 

  let imageSrc;
  let imageSize = "15px";
  switch (priority) {
    case 0: imageSrc = "https://cdn-icons-png.flaticon.com/512/6325/6325609.png";
    break;
    case 1:
      imageSrc = "https://i.ibb.co/wsd9HCd/1.jpg";
      break;
    case 2:
      imageSrc = "https://i.ibb.co/DR9RdNh/2.jpg";
      break;
    case 3:
      imageSrc = "https://i.ibb.co/sv5t17M/3.jpg";
      break;
    case 4:
      imageSrc = "https://i.ibb.co/q7JSyhG/urgent.jpg";
      break;
    default:
      imageSrc = ""; // Provide a default image for unknown priority levels
  }

  return <img src={imageSrc} width={imageSize} height={imageSize} />;
};

const Card = ({ id, title, tag, status, priority }) => {
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: '5px' }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div className="imageContainer relative" style={{ width: "30px", height: "30px" }}>
          <img
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200, }}>
        <span>
            <span className="tags color-green">
          {getPriorityIcon(priority)}
        </span>
        <sapan>{title}</sapan> 
        
        </span>
      </div>
      <div className="cardTags">
        
      <span className="tags color-green">{status} </span>
        {tag?.map((elem, index) => {
          return (
            <div key={index} className="tags color-green">
              <span>•</span> {elem}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
