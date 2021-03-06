import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import "../css/blog.css";
import Loading from "./Loading";
import Error from "./Error";
import Footer from "./Footer";
import axios from "axios";

const url = "https://api.getsyoujob.com/blogs";

const Blog = () => {
  const [blogs, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // const getBlog = async () => {
  //   setIsLoading(true);
  //   try {
  //     const respond = await fetch(url);
  //     if (respond.status >= 200 && respond.status <= 299) {
  //       let blogs = await respond.json();
  //       setIsLoading(false);
  //       setBlog(blogs);
  //     } else {
  //       setIsError(true);
  //       setIsLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        setIsLoading(true);
        if (response.status >= 200 && response.status <= 299) {
          const blog = response.data;
          setBlog(blog);
          setIsLoading(false);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  if (isLoading) {
    setTimeout(function () {
      return (
        <div>
          <Loading />
        </div>
      );
    }, 9000);
  }

  if (isError) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="hero_image">
            <h1>Design Tools</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              ratione itaque fuga omnis ab explicabo provident.
            </p>
          </div>
        </div>
      </section>
      <section id="body_section">
        <div className="container_blog">
          {blogs.map((blog) => {
            const { id, publishedDate, title, description, image } = blog;
            return (
              <div className="row" key={id}>
                <div className="col-8">
                  <p className="date">{publishedDate}</p>
                  <h2>{title}</h2>
                  <p>{parse(description.substring(0, 299))}</p>
                </div>
                <div className="col-4">
                  <img
                    src={"https://api.getsyoujob.com" + image}
                    alt={title}
                    className="blog_img"
                    width="100%"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
