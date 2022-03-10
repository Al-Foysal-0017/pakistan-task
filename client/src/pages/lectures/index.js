import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homePosts } from "../../store/actions/post.action";
import { REDIRECT_FALSE, REMOVE_MESSAGE } from "../../store/types";
// import { homePosts } from "../store/asyncMethods/PostMethods";
import toast, { Toaster } from "react-hot-toast";
import "./_Lecture.scss";
import Container from "../../components/container/index";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Lectures = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.allLectures);
  console.log(posts);
  useEffect(() => {
    dispatch(homePosts());
  }, [dispatch]);

  const { redirect, message, loading } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (redirect) {
      dispatch({ type: REDIRECT_FALSE });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: REMOVE_MESSAGE });
    }
  }, [dispatch, message, redirect]);
  return (
    <Container>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
      <div className="lecture">
        <h2 className="lecture__heading">Choose Urdu Course Level</h2>

        {/* <div class="container">
        <div class="card__container">
          <div class="card">
            <div class="card__content">
              <h3 class="card__header">Card 1</h3>
              <p class="card__info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button class="card__button">Read now</button>
            </div>
          </div>
          <div class="card">
            <div class="card__content">
              <h3 class="card__header">Card 2</h3>
              <p class="card__info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button class="card__button">Read now</button>
            </div>
          </div>
          <div class="card">
            <div class="card__content">
              <h3 class="card__header">Card 3</h3>
              <p class="card__info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button class="card__button">Read now</button>
            </div>
          </div>
        </div>
      </div> */}
        {/* <div style={{ marginTop: "5rem" }} /> */}

        <div className="lecture__card">
          <div className="lecture__card__level">Beginner Level</div>
          <Link to="/lectures/beginner">
            <button className="lecture__card__btn">Get Started</button>
          </Link>
        </div>

        <div className="lecture__card">
          <div className="lecture__card__level">Intermiddate Level</div>
          <Link to="/lectures/intermiddate">
            <button className="lecture__card__btn">Get Started</button>
          </Link>
        </div>

        <div className="lecture__card">
          <div className="lecture__card__level">Advance Level</div>
          <Link to="/lectures/advance">
            <button className="lecture__card__btn">Get Started</button>
          </Link>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Lectures;
