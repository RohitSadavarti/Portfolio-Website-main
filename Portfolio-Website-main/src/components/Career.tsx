import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          {/* Current Role at Sutherland */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Data Analyst</h4>
                <h5>Sutherland | Airoli, Mumbai</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Build and deploy interactive Power BI dashboards from scratch for real-time KPI visibility[cite: 15]. 
              Automate recurring manual reporting tasks using Python scripts and Excel VBA Macros, cutting turnaround time by 40%[cite: 17]. 
              Write optimized SQL queries and design robust ETL pipelines using Power Query[cite: 16, 18].
            </p>
          </div>

          {/* Role at Teleperformance */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior MIS Executive</h4>
                <h5>Teleperformance (TP) | Thane</h5>
              </div>
              <h3>2023 - 2025</h3>
            </div>
            <p>
              Designed and maintained core Business Review reports (WBR/MBR) in Advanced Excel to track operational metrics against client SLAs[cite: 23]. 
              Managed sensitive banking customer data with zero-error accuracy and calculated complex monthly agent payroll/incentive inputs[cite: 24, 25].
            </p>
          </div>

          {/* Role at EOS */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MIS Executive</h4>
                <h5>Eureka Outsourcing Solutions (EOS) | Thane</h5>
              </div>
              <h3>2021 - 2022</h3>
            </div>
            <p>
              Prepared and distributed daily operational status reports covering key team performance metrics[cite: 31]. 
              Achieved 100% accuracy in manual data entry for critical banking transactions over an 18-month tenure[cite: 33].
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Career;
