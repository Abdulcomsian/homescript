function Myaccount() {
  return (
    <>
      <div className="Myaccount">
        <div className="Details-setion">
          <div className="card">
            <div className="card-body ">
              <form>
                <div className=" ">
                  <div className="main">
                    <div className="header">
                      <h3>Details</h3>
                    </div>
                    <div></div>
                    <div className="row formSection">
                      <div className="col-sm-6 mb-3">
                        <label>Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label>Email</label>
                        <input type="email" className="form-control" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label>Role</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label>Website</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detailsBtn-section">
                  <button type="button" className="btn btn-light cancel">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary save">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="Password-section">
          <div className="card">
            <div className="card-body ">
              <form>
                <div className="formSection">
                  <div className="main">
                    <div className="header">
                      <h3>Change password</h3>
                    </div>
                    <div></div>
                    <div>
                      <div className="mb-3">
                        <label>Current password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className=" mb-3">
                        <label>New password</label>
                        <input type="password" className="form-control" />
                      </div>
                      <div className=" mb-3">
                        <label>Confirm password</label>
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="Password-Details">
                      <div className="title">
                        <h3>Password must contain :</h3>
                      </div>
                      <div className="List">
                        <ul>
                          <li>At least 6 character</li>
                          <li>At least 1 uppercase letter(A..Z)</li>
                          <li>At least 1 lowercase letter(a..z)</li>
                          <li>At least 1 number(0..9)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detailsBtn-section">
                  <button type="button" className="btn btn-light cancel">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary save">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Myaccount;
