import React from "react";
import Header from "../UI/header/Header";
import './main.css'

const Main = () => {
    return (
        <div>
            <Header/>
            <section className="transparant">
              <div className="transparant-block">
              <h1>ТРАНСПОРТНАЯ КОМПАНИЯ</h1>
              <p>Мы занимаемся грузоперевосками более 300 лет со дня правления Рюриковичей. Как на земле, так и по воде, так и в воздухе. Во время русско японской войны именно мы доставляли боеприпасы белогвардейца. Мы доставляли припасы по лендлизу красной армии, почему тогда мы не можем доставить что то вам?</p>
              <button>подробнее</button>
              </div>
              <div className="transparant-block">
              </div>
            </section>
        </div>
    )
}

export default Main;