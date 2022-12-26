import React, { useState } from "react";
import "./registercard.css";
import axios from "axios";

export default function Write() {
  const [nama, setNama] = useState("");
  const [ttl, setTtl] = useState("");
  const [alamat, setAlamat] = useState(null);
  const [email, setEmail] = useState(null);
  const [wa, setWa] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReg = {
      nama,
      ttl,
      alamat,
      email,
      wa
    };
    try {
       await axios.post("/registers", newReg);
      window.location.replace("/register");
    } catch (err) {}
  };

  return (
    <div className="write">
      <div className="writeWrapper">
        <form className="writeForm" onSubmit={handleSubmit}>
        <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Ttl</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={ttl}
                onChange={(e) => setTtl(e.target.value)}
                placeholder="Ttl"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                placeholder="Alamat"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">No Wa</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={wa}
                onChange={(e) => setWa(e.target.value)}
                placeholder="No Wa"
              />
            </div>
          </div>
          <button className="writeBtn" type="submit">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}
