import React from "react";
import { CardCover, User } from "../../constants/images";
import "./card.css";
const Card = () => {
  return (
    <>
      <main className="card-container">
        <main className="card-container__card">
          <figure className="card-container__card__cover-image">
            <img src={CardCover} alt="alt" />
          </figure>
          <main className="card-container__card__content">
            <div className="card-container__card__content--pos-absolute">
              <figure className="card-container__card__content__logo">
                <img src={User} alt="alt" />
              </figure>
            </div>
            <div className="card-container__card__content--pos-absolute">
              <div className="card-container__card__content__name">
                <p>Uttam</p>
                <p>Makwana</p>
              </div>
            </div>
            <div className="card-container__card__content--pos-absolute">
              <div className="card-container__card__content__academic-info">
                <p>Information Technology</p>
                <p>2020 - 2024</p>
              </div>
            </div>
            <div className="card-container__card__content--pos-absolute">
              <div className="card-container__card__content__buttons">
                <button>View More</button>
                <button>Follow</button>
              </div>
            </div>
          </main>
        </main>
      </main>
    </>
  );
};

export default Card;
