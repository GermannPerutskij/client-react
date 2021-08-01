import "../styles/home.scss";
import { Tabs, Tab } from "react-bootstrap";

export default function Home() {
  return (
    <div className="home-container">
      <div className="students-container">
        <h1>Мои ученики</h1>
        <Tabs
          defaultActiveKey="students"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="students" title="Ученики" className="students-tab">
            <div className="buttons">
              <div className="add-student-btn">
                <img
                  className="add-icon"
                  src={require("../assets/add-icon-blue.svg").default}
                  alt="add"
                />
                <div className="btn-text">Добавить ученика</div>
              </div>
              <div className="add-group-btn">
                <img
                  className="add-icon"
                  src={require("../assets/add-icon-purple.svg").default}
                  alt="add"
                />
                <div className="btn-text">Добавить группу</div>
              </div>
            </div>

            <div className="student-items-container">
              <div className="no-students-placeholder">
                <div className="no-students-box">
                  <img
                    className="add-icon"
                    src={require("../assets/add-grey.svg").default}
                    alt="add"
                  />
                  <div className="text">Добавьте своего первого ученика</div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="groups" title="Группы" className="groups-tab"></Tab>
        </Tabs>
      </div>
      <div className="schedule-container">
        <div className="add-container">
          <img
            className="calendar-icon"
            src={require("../assets/calendar.svg").default}
            alt="add"
          />
          <div className="text">
            Для планирования уроков в расписании сначала добавьте учеников
          </div>
          <div className="add-student-btn">
            <img
              className="add-icon"
              src={require("../assets/add-white.svg").default}
              alt="add"
            />
            <div className="btn-text">Добавить ученика</div>
          </div>
        </div>
      </div>
    </div>
  );
}
