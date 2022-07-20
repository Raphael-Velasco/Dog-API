
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("https://t4.ftcdn.net/jpg/02/59/42/91/360_F_259429114_zRivV3HHiutqocwL8f2rL3MQ3LIXTX5I.jpg");
`;
const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 45px;
  padding: 20px;
`;
const Button = styled.img`

`

export default function DogAPI() {
  const [dog, setDog] = useState([]);
  const [imagemAparecendo, setImagemAparecendo] = useState(false);

  function DogAPI() {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      console.log(response);
      setDog(response.data.message);
      setImagemAparecendo(true);
    });
  }
  return (
    <Div>
      <h1 style={{ color:"red" }}>DogAPI</h1>
      {imagemAparecendo && (
        <Img src={dog} alt="imagem de doguinho" />
      )}
      <button
        onClick={() => {
          DogAPI();
        }}
      >
        Clica Aqui
      </button>
    </Div>
  );
}
