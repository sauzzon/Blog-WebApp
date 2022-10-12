import React from "react";

const Menu = () => {
  const imageLink =
    "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80";
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ullratione omnis alias autem nisi quod ipsum similique ",
      img: imageLink,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ullratione omnis alias autem nisi quod ipsum similique ",
      img: imageLink,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ullratione omnis alias autem nisi quod ipsum similique ",
      img: imageLink,
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet, consectetur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ullratione omnis alias autem nisi quod ipsum similique ",
      img: imageLink,
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet, consectetur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ullratione omnis alias autem nisi quod ipsum similique ",
      img: imageLink,
    },
  ];
  return (
    <div className="menu">
      <h1>Other post you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
