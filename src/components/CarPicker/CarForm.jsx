import "./CarForm.css";

const CarForm = ({ onFormSubmit }) => {
  const closeModalHandler = () => {
    onFormSubmit();
  };

  const formSubmitHandler = () => {
    onFormSubmit();
  };

  const overlayCloseHandler = (e) => {
    if (e.target.className === "overlay") onFormSubmit();
  };
  return (
    <>
      <div className="form-container">
        <div className="form-details">
          <div className="flex-group">
            <h2 className="details-title">Your Details</h2>
            <button className="btn-close" onClick={closeModalHandler}>
              <ion-icon class="close-icon" name="close-outline"></ion-icon>
            </button>
          </div>
          <p className="details-description">
            Let us know how to get back to you.
          </p>
        </div>
        <form>
          <div className="form-inputs">
            <div className="input-section">
              <div className="input-wrapper">
                <label className="wrapper-title">
                  First Name <span>*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="input-help">This field is required.</p>
              </div>
              <div className="input-wrapper">
                <label className="wrapper-title">
                  Last Name <span>*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="input-help">This field is required.</p>
              </div>
            </div>

            <div className="input-section">
              <div className="input-wrapper">
                <label className="wrapper-title">
                  Phone Number <span>*</span>
                </label>
                <input
                  required
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="input-help">This field is required.</p>
              </div>
              <div className="input-wrapper">
                <label className="wrapper-title">
                  Age <span>*</span>
                </label>
                <input
                  required
                  type="number"
                  min="18"
                  max="99"
                  placeholder="Enter your age"
                ></input>
                <p className="input-help">This field is required.</p>
              </div>
            </div>

            <div className="input-wrapper wrapper-extend">
              <label className="wrapper-title">
                Email Address <span>*</span>
              </label>
              <input
                required
                type="email"
                placeholder="Example: user@website.com"
              ></input>
              <p className="input-help">This field is required.</p>
            </div>
            <div className="input-wrapper wrapper-extend">
              <label className="wrapper-title">
                Address<span>*</span>
              </label>
              <input
                required
                type="text"
                placeholder="Enter your address"
              ></input>
              <p className="input-help">This field is required.</p>
            </div>

            <div className="form-question">
              <div className="input-wrapper">
                <label className="wrapper-title">
                  Question / Comments <span>*</span>
                </label>
                <textarea
                  className="form-textarea"
                  rows="8"
                  cols="30"
                ></textarea>
              </div>
            </div>
          </div>

          <button className="form-submit" type="submit">
            Reserve Now
          </button>
        </form>
      </div>
      <div className="overlay" onClick={overlayCloseHandler}></div>
    </>
  );
};

export default CarForm;
