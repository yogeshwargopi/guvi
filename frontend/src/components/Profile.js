import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import leftimg from "../Assets/Frame 1.png";
import toast from "react-hot-toast";

const Profile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/user/profile", {
          headers: { Authorization: token },
        });
        //setUser(res.data);
        setName(res.data.username);
        //setPassword(res.data.password);
        setAge(res.data.age || "");
        setDob(res.data.dob ? res.data.dob.substring(0, 10) : "");
        setContact(res.data.contact || "");
      } catch (error) {
        console.error(error);
        toast.error("failed to load data");
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "http://localhost:5000/user/profile",
        { age, dob, contact },
        { headers: { Authorization: token } }
      );
      toast.success("Updated Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <MDBContainer fluid className="bg-dark" style={{ height: "100vh" }}>
      <MDBRow className="display-flex justify-content-center align-items-center">
        <MDBCol md="8" style={{ width: "70%" }}>
          <MDBCard className="my-4 h-100">
            <MDBRow className="g-0">
              <MDBCol md="6" className="d-none d-md-block">
                <div
                  className="rounded-start"
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    position: "relative",
                    objectFit: "cover",
                  }}
                >
                  <img
                    src={leftimg}
                    alt="Sample photo"
                    className="rounded-start"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </MDBCol>

              <MDBCol md="6">
                <MDBCardBody className="text-black d-flex flex-column justify-content-center ">
                  <h3 className="mb-5 text-uppercase fw-bold">Profile</h3>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="First Name"
                    size="lg"
                    id="form1"
                    type="text"
                    value={name}
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Age"
                    size="lg"
                    id="form4"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="DOB"
                    size="lg"
                    id="form5"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Contact"
                    size="lg"
                    id="form6"
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />

                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn
                      color="light"
                      onClick={handleSubmit}
                      size="sm"
                      style={{ backgroundColor: "skyblue" }}
                    >
                      Update
                    </MDBBtn>
                    <MDBBtn
                      className="ms-2"
                      onClick={handleLogout}
                      color="warning"
                      size="sm"
                      style={{ backgroundColor: "red" }}
                    >
                      Logout
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Profile;
