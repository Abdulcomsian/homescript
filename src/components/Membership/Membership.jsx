function Membership() {
  return (
    <>
      <div className="Membership">
        <div className="card">
          <div className="card-body">
            <div className="Grid-section">
              <div className="header"><h3>MemberShip</h3></div>
              <div></div>
              <div className="Membership-form">
                <label className="label">Your Current Plan</label>
                <input
                  type="text"
                  class="form-control input"
                  placeholder="Social Post + Descriptions  Yearly"
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
export default Membership;
