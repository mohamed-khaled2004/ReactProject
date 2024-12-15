import { faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import { useEffect, useState } from "react";

import Modal from "react-modal";
// import { useNavigate } from "react-router-dom";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // طبقة غمقة خلف المودال

    zIndex: 10100,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "35vw", // جعل عرض المودال أكبر
    maxWidth: "50vw", // تعيين الحد الأقصى
    padding: "20px",
    overflow: "scroll",
    maxHeight: "92vh",
    zIndex: 1051,
    lineHeight: "35px",
    // إضافة بعض المسافات حول المحتوى
  },
};

Modal.setAppElement("body"); // تأكد من تعيين العنصر الأساسي لتطبيقك

export default function Packages() {
  // const navigate = useNavigate()
  // const go_navigat = ()=>{
  //   navigate('/Kingpage')
  // }
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      number: e.target.number.value,
      email: e.target.email.value,
      country: e.target.country.value,
      age: e.target.age.value,
      gender: e.target.gender.value,
      weight: e.target.weight.value,
      height: e.target.height.value,
    };

    localStorage.setItem("subscriptionData", JSON.stringify(formData));
    closeModal();
  };
  const [Package, setPackage] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false); // حالة لإظهار المودال
  const [selectedPackage, setSelectedPackage] = useState(null); // لتخزين بيانات الحزمة المختارة

  const GetDatePackages = () => {
    axios
      .get(`http://localhost:1337/api/packages`)
      .then((res) => {
        console.log("API Response:", res.data);
        setPackage(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    GetDatePackages();
  }, []);

  const openModal = (pkg) => {
    setSelectedPackage(pkg); // تعيين الحزمة المختارة
    setIsOpen(true); // فتح المودال
  };

  const closeModal = () => {
    setIsOpen(false); // إغلاق المودال
    setSelectedPackage(null); // مسح الحزمة المحددة عند الإغلاق
  };

  return (
    <div
      className="col-12 d-flex justify-content-center-align"
      style={{ height: "auto" }}
    >
      <div className="container">
        <div className="row" style={{}}>
          {Package.map((el) => (
            <div
              key={el.id}
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              style={{}}
            >
              <div
                className="card"
                style={{
                  width: "100%",
                  border: "none",
                  background:
                    "linear-gradient(130deg, rgba(255,223,90,1) 0%, rgba(6,6,6,1) 100%",
                  color: "white",
                }}
              >
                <div className="card-body" style={{ lineHeight: "35px" }}>
                  <h5 className="card-title">{el.Package_Title}</h5>
                  <ul>
                    <li className="card-text">{el.Text_Package_Gold1}</li>
                    <li className="card-text">{el.Text_Package_Gold2}</li>
                    <li className="card-text">{el.Text_Package_Gold3}</li>
                    <li className="card-text">{el.Text_Package_Gold4}</li>
                    <li className="card-text">{el.Text_Package_Gold5}</li>
                    <li className="card-text">{el.Text_Package_Gold6}</li>
                    <li className="card-text">{el.Text_Package_Gold7}</li>
                    <li className="card-text">{el.Text_Package_Gold8}</li>
                    <li className="card-text">{el.Text_Package_Gold9}</li>
                  </ul>
                  <button
                    className="btn btn-primary"
                    onClick={() => openModal(el)}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ))}
          {Package.map((el) => (
            <div key={el.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div
                className="card"
                style={{
                  width: "100%",
                  border: "none",
                  background:
                    "linear-gradient(66deg, rgba(29,41,175,1) 0%, rgba(35,70,144,1) 100%)",
                  color: "white",
                }}
              >
                <div className="card-body" style={{ lineHeight: "35px" }}>
                  <h5 className="card-title">{el.Package_Title}</h5>
                  <ul>
                    <li className="card-text">{el.Text_Package_Gold1}</li>
                    <li className="card-text">{el.Text_Package_Gold2}</li>
                    <li className="card-text">{el.Text_Package_Gold3}</li>
                    <li className="card-text">{el.Text_Package_Gold4}</li>
                    <li className="card-text">{el.Text_Package_Gold5}</li>
                    <li className="card-text">{el.Text_Package_Gold6}</li>
                    <li className="card-text">{el.Text_Package_Gold7}</li>
                    <li className="card-text">{el.Text_Package_Gold8}</li>
                    <li className="card-text">{el.Text_Package_Gold9}</li>
                  </ul>
                  <button
                    className="btn btn-primary"
                    onClick={() => openModal(el)}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ))}
          {Package.map((el) => (
            <div key={el.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div
                className="card"
                style={{
                  width: "100%",
                  border: "none",
                  background:
                    "linear-gradient(130deg, rgba(192,192,192,1) 0%, rgba(6,6,6,1) 100%)",
                  color: "white",
                }}
              >
                <div className="card-body" style={{ lineHeight: "35px" }}>
                  <h5 className="card-title">{el.Package_Title}</h5>
                  <ul>
                    <li className="card-text">{el.Text_Package_Gold1}</li>
                    <li className="card-text">{el.Text_Package_Gold2}</li>
                    <li className="card-text">{el.Text_Package_Gold3}</li>
                    <li className="card-text">{el.Text_Package_Gold4}</li>
                    <li className="card-text">{el.Text_Package_Gold5}</li>
                    <li className="card-text">{el.Text_Package_Gold6}</li>
                    <li className="card-text">{el.Text_Package_Gold7}</li>
                    <li className="card-text">{el.Text_Package_Gold8}</li>
                    <li className="card-text">{el.Text_Package_Gold9}</li>
                  </ul>
                  <button
                    className="btn "
                    style={{
                      background:
                        "linear-gradient(130deg, rgba(192,192,192,1) 0%, rgba(6,6,6,1) 100%)",
                      borderRadius: "14px",
                      border: "none",
                    }}
                    onClick={() => openModal(el)}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ))}

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Subscription Modal"
          >
            <h2 className="fs-5">Subscription Details</h2>
            <button
              type="button"
              className="btn btn-danger"
              onClick={closeModal}
            >
              Close
            </button>

            {selectedPackage && (
              <div>
                <h3>{selectedPackage.Package_Title}</h3>
                <form onSubmit={handleSubmit}>
                  <div className="col-12 d-flex justify-content-around gap-2">
                    <div className="mb-3" style={{ width: "50%" }}>
                      <label htmlFor="name" className="form-label">
                        <span className="p-2 text-primary">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="mb-3" style={{ width: "50%" }}>
                      <label htmlFor="number" className="form-label">
                        <span className="p-1 text-success">
                          <FontAwesomeIcon icon={faPhone} />
                        </span>
                        WhatsApp Number
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="number"
                        placeholder="Enter your number"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                      Country of Residence
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      placeholder="Enter your country"
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-around col-12">
                    <div className="mb-3 col-5">
                      <label htmlFor="age" className="form-label">
                        Age
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="age"
                        placeholder="Enter your age"
                        required
                      />
                    </div>

                    <div className="mb-3 col-5">
                      <label htmlFor="gender" className="form-label">
                        Gender
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="gender"
                        placeholder="Enter your gender"
                        required
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-around col-12">
                    <div className="mb-3 col-5">
                      <label htmlFor="weight" className="form-label">
                        Weight
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="weight"
                        placeholder="Enter your weight"
                        required
                      />
                    </div>

                    <div className="mb-3 col-5">
                      <label htmlFor="height" className="form-label">
                        Height
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="height"
                        placeholder="Enter your height"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="subscriptionOption"
                        id="option1"
                        value="option1"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="option1">
                        Option 1
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="subscriptionOption"
                        id="option2"
                        value="option2"
                      />
                      <label className="form-check-label" htmlFor="option2">
                        Option 2
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Subscribe Now
                  </button>
                </form>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
}
