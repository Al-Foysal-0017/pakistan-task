import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homePosts } from "../../store/actions/post.action";
import { REDIRECT_FALSE, REMOVE_MESSAGE } from "../../store/types";
// import { homePosts } from "../store/asyncMethods/PostMethods";
import toast, { Toaster } from "react-hot-toast";
import Container from "../../components/container/index";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { IoMdArrowRoundBack } from "react-icons/io";

const AdvanceLevel = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.allLectures);
  console.log(posts);
  useEffect(() => {
    dispatch(homePosts());
  }, [dispatch]);

  const { redirect, message } = useSelector((state) => state.post);
  const { user, loading } = useSelector((state) => state.auth);
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
      <div className="lecture">
        <h4 className="lecture__heading backBtn">
          <IoMdArrowRoundBack size={24} />
          <Link to="/lectures">Back</Link>
        </h4>
        <h2 className="lecture__heading">All Intermiddate Urdu Lecture</h2>
        {!loading ? (
          <div>
            {/* {user ? ( */}
            <>
              {posts?.map((item, index) => (
                <>
                  {item?.level === "Intermiddate" && (
                    <div key={index} className="lecture__level__card">
                      <div>
                        <img
                          className="lecture__level__card__img"
                          src={item?.image}
                          alt=""
                        />
                      </div>
                      <div className="lecture__level__card__right">
                        <h4 className="lecture__card__level">{item?.title}</h4>
                        <p className="lecture__level__card__right__p">
                          {item?.description}
                        </p>
                        <p className="lecture__level__card__right__p">
                          By {item?.slug}
                        </p>
                        <button
                          style={{ marginTop: "6px" }}
                          className="lecture__card__btn"
                        >
                          Play Video
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </>
            {/* ) : (
              <div className="warning">
                You are not login yet.
                <br />
                Please login first.........
              </div>
            )} */}
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
    </Container>
  );
};

export default AdvanceLevel;
