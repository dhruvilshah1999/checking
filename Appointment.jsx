import React from "react";
import "../Styles/Appointment.css";
import { UpdatesData } from "../TempData/Data";

const Appointment = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
                <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Appointment;
