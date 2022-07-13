import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplicationFormPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [applicationText, setApplicationText] = useState();
  const [profession, setProfession] = useState();
  const [country, setCountry] = useState();
  const [tripsAPF, setTripsAPF] = useState([]);

  useEffect(() => {
    getTripsAFP();
  }, []);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
  };

  const onChangeApplicationText = (event) => {
    setApplicationText(event.target.value);
  };

  const onChangeProfession = (event) => {
    setProfession(event.target.value);
  };

  const onChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const getTripsAFP = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique-rodriguez/trips"
      )
      .then((res) => {
        setTripsAPF(res.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmitApplicationForm = (event, id) => {
    event.preventDefault();

    const body = {
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: country
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique-rodriguez/trips/${id}/apply`,
        body
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-loginPage">
      <div className="box">
        <form onSubmit={onSubmitApplicationForm}>
          <div className="iconeAndTitulo-login">
            <img
              src="/IMG/logo.png"
              className="img-icone-login"
              alt="icone-logo"
            />
          </div>
          <div className="select-planetas">
            <select required>
              <option value="">Selecione a viagem.</option>
              {tripsAPF &&
                tripsAPF.map((trip) => (
                  <option key={trip.id} value={tripsAPF}>
                    {trip.name}
                  </option>
                ))}
            </select>
            <label>Viagem:</label>
          </div>
          <div className="input-container">
            <input type="name" required />
            <label>Nome:</label>
          </div>
          <div className="input-container">
            <input type="number" required />
            <label>Idade:</label>
          </div>
          <div className="input-container">
            <input type="text" required />
            <label>Descrição:</label>
          </div>
          <div className="input-container">
            <input type="number" required />
            <label>Duração em dias:</label>
          </div>
          <div className="btns-login">
            <button className="btn-criar">CRIAR</button>
            <button
              className="btn-voltar"
              onClick={() => navigate("/admin/trips/list")}
            >
              VOLTAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationFormPage;