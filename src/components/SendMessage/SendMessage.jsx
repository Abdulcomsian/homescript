function SendMessage() {
  return (
    <>
      <div className="Contactus">
        <div className="card">
          <div className="card-body">
            <div className="Grid-section">
              <div className="header">
                <h3>Contact Us</h3>
              </div>
              <div></div>
              <div className="Membership-form name">
                <input
                  type="text"
                  className="form-control input"
                  placeholder="Name"
                />
              </div>
              <div className="Membership-form help">
                <input
                  type="text"
                  className="form-control input"
                  placeholder="How Can We Help?"
                />
              </div>
              <div className="Membership-form name">
                <input
                  type="text"
                  className="form-control input"
                  placeholder="Email Address"
                />
              </div>
              <div className="Membership-form help">
                <input
                  type="text"
                  className="form-control input"
                  placeholder="Phone Number"
                />
              </div>
              <div className="Membership-form message">
                <textarea
                  type="text"
                  className="form-control input"
                  placeholder="Message"
                  rows={6}
                />
              </div>
            </div>
            <div className="MangePlanBtn">
              <button type="submit" className="btn btn-primary">
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SendMessage;
