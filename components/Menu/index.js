import React from "react";
import { BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./index.css";

export default function Menu() {
  return (
    <div className="menu">
      <a className="social" href="https://www.youtube.com/watch?v=gvkqT_Uoahw&ab_channel=Fireship">
        <BsYoutube color="#FFF" size={24} />
      </a>
      <a className="social" href="https://instagram.com/sancosta_designer">
        <BsInstagram color="#FFF" size={24} />
      </a>
      <Link className="menu-item" to="/links">
        Meus links
      </Link>
    </div>
  );
}
