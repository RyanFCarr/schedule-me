import React, { Component } from "react";
import moment from "moment";

class AppointmentCard extends Component {
  render() {
    return(
    <div className="card" style={{ padding: "30px" }}>
      {this.props.appointments.map((appointment) => {
        return (
          <div className="appt-card" style={{ padding: "30px" }}>
            <p>
              <strong>{moment(appointment.startTime).format("LLLL")}</strong>
            </p>
            {appointment.Services.map((Service) => (
              <p>{Service.name}</p>
            ))}
            <button
              type="button"
              className="btn btn-danger content-center"
              onClick={(e) => this.props.cancelAppointment(appointment.id, e)}>
              Cancel
            </button>
          </div>
        );
      })}
    </div>
    )
  }
}
export default AppointmentCard;
