import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Pokeapi() {

  const [name, setname] = useState("");
  const [Find, setFind] = useState("litwick");
  const [Img, setImg] = useState("");
  const [Type, setType] = useState("");

  useEffect(() => {
    /* async await */
    async function getData() {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
      {/* console.log(res); */}
      setImg(res.data.sprites.front_default);
      setType(res.data.types[0].type.name);
    }

    getData();
  }, [Find]);

  /* update name for request */
  const Typename = (event) => {
    setname(event.target.value);
  };

  /* set find to name */
  const Search = () => {
    setFind(name.toLowerCase());
    setname("");
  };

  return (
    <>
      <div className="back">
        <div className="card">
          <img src={`${Img}`} />
          {/*<div className="name">{Find}</div> */}
          <div className="type">{Type}</div>

          <input type="text" onChange={Typename} value={name} />

          <button onClick={Search}>Go!</button>
        </div>
      </div>
    </>
  );
}