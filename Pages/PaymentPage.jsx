import axios from "axios";
import { useEffect, useState } from "react";

export default function PaymentPage() {

  // عند تقديم النموذج
  const handleSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة عند إرسال النموذج

    const userName = e.target.userName.value;
    const phoneNumber = e.target.phoneNumber.value;
    localStorage.setItem('userName', userName); 
    localStorage.setItem('phoneNumber', phoneNumber);

    // يمكن إضافة رسالة تأكيد أو أي إجراء بعد تخزين البيانات
    console.log('User Info Stored');
  };

  const [Payment, setPayment] = useState([]);

  const GetDatePayment = () => {
    axios
      .get("http://localhost:1337/api/payments?populate=*")
      .then((res) => {
        setPayment(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    GetDatePayment(); // استدعاء الدالة لتحميل البيانات عند تحميل الصفحة
  }, []);

  return (
    <div className="container-fluid p-0">
      <div
        className="card mb-3 position-relative"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "black",
        }}
      >
        {/* Grid container for image and form */}
        <div className="row g-0 w-100">
          {/* Image on the left */}
          <div className="col-lg-6 col-12 position-relative">
            {/* Black overlay */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              {/* You can add images or content here */}
            </div>
          </div>
  
          {/* Form on the right */}
          <div
            className="col-lg-6 col-12 d-flex align-items-center justify-content-center"
            style={{ zIndex: 2, padding: "20px" }}
          >
            <div className="w-100" style={{ maxWidth: "500px" }}>
              <h5 className="text-center mb-4 text-white">Contact Us</h5>
              <form onSubmit={handleSubmit}>
                {/* Name field */}
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label" style={{ color: "#3d7dd8" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="Enter your name"
                    required
                    style={{ border: "none" }}
                  />
                </div>
                {/* Phone Number field */}
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label" style={{ color: "#3d7dd8" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    required
                    style={{ border: "none" }}
                  />
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{ backgroundColor: "#007bff" }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
  
        {/* Display cards under the form */}
    
      </div>
      <div className="container mt-4">
          <div className="row col-6">
            {Payment.map((el, index) => {
              return (
                <div key={index} className="col-12 col-md-4 mb-4">
                  <div className="card" style={{ width: "100%" }}>
                    <img
                      src={`http://localhost:1337/` + el.Subscribe[0].url}
                      className="card-img-top"
                      alt="Card image"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  );
}  