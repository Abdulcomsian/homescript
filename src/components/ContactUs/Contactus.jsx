function Contactus() {
  return (
    <>
      <div className="Membership">
        <div className="card">
          <div className="card-body">
            <div className="Grid-section">
              <div className="header">
                <h3>Contact Us</h3>
              </div>
              <div></div>
              <div className="Membership-form">
                <input
                  type="text"
                  class="form-control input"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="MangePlanBtn">
              <button type="submit" class="btn btn-primary">
                Manage Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contactus;
