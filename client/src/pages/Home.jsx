import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ullratione omnis alias autem nisi quod ipsum similique officia veroarchitecto, incidunt veritatis hic voluptatum libero magni necessitatibusinventore blanditiis vitae eos aspernatur est!",
      img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ullratione omnis alias autem nisi quod ipsum similique officia veroarchitecto, incidunt veritatis hic voluptatum libero magni necessitatibusinventore blanditiis vitae eos aspernatur est!",
      img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ullratione omnis alias autem nisi quod ipsum similique officia veroarchitecto, incidunt veritatis hic voluptatum libero magni necessitatibusinventore blanditiis vitae eos aspernatur est!",
      img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet, consectetur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ullratione omnis alias autem nisi quod ipsum similique officia veroarchitecto, incidunt veritatis hic voluptatum libero magni necessitatibusinventore blanditiis vitae eos aspernatur est!",
      img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet, consectetur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ullratione omnis alias autem nisi quod ipsum similique officia veroarchitecto, incidunt veritatis hic voluptatum libero magni necessitatibusinventore blanditiis vitae eos aspernatur est!",
      img: "https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
