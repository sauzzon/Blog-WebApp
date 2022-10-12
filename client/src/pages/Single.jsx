import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
        <div className="user">
          <img
            src="https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum, adipisicing elit. hello ssdum voluptates ab dolorum?
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iure
          sequi illo, quidem alias, perferendis beatae, numquam vero magnam vel
          necessitatibus atque odit facere voluptatum.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla
          deleniti. Libero delectus culpa similique ratione explicabo, hic ipsa
          veritatis quae magnam facilis cum ex odio sequi, temporibus quos iusto
          voluptates repellat. Unde culpa, in iste itaque nostrum nihil
          reprehenderit quisquam ipsum corporis eligendi praesentium ab iusto
          aliquid dolores enim adipisci possimus et quod, voluptate sed
          repudiandae quidem porro. Quod omnis corrupti rem cum molestiae quam
          quaerat sequi soluta nobis dolores sunt architecto quos aspernatur
          quibusdam minus dignissimos officiis laborum, error libero, quas eius.
          Omnis quae cumque nemo corporis voluptas velit necessitatibus sit quis
          placeat debitis distinctio, sed, nulla maxime!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
          voluptates consectetur. Veniam velit vero enim totam reprehenderit
          cupiditate odio ipsum, autem quia tempore dolor ducimus iure non nulla
          quidem, explicabo cumque obcaecati? Modi rem omnis aut magnam corrupti
          doloribus enim velit unde rerum vitae officiis aperiam, officia dolore
          beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          officia aliquam delectus, est, natus odio voluptas neque iure
          temporibus voluptate ipsa tenetur explicabo autem necessitatibus
          perferendis voluptatum sunt? Quas, voluptates.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eos
          voluptates consectetur. Veniam velit vero enim totam reprehenderit
          cupiditate odio ipsum, autem quia tempore dolor ducimus iure non nulla
          quidem, explicabo cumque obcaecati? Modi rem omnis aut magnam corrupti
          doloribus enim velit unde rerum vitae officiis aperiam, officia dolore
          beatae.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
