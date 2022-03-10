import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homePosts, setAdminPost } from "../../../store/actions/post.action";
import FileBase from "react-file-base64";
import "./_adminDashboard.scss";
import Loader from "../../../components/Loader/Loader";
import { REDIRECT_FALSE } from "../../../store/types";

const AdminDashboard = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useDispatch();
  const {
    user: { _id, name },
  } = useSelector((state) => state.auth);
  const { createErrors, redirect, loading } = useSelector(
    (state) => state.post
  );
  const { posts } = useSelector((state) => state.allLectures);
  console.log("POSTS:", posts);

  const [state, setState] = useState({
    title: "",
    description: "",
    image: "",
    slug: "",
    level: "Beginner",
  });
  const handleDescription = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const createPost = (e) => {
    e.preventDefault();
    const { title, description, image, level, slug } = state;
    dispatch(
      setAdminPost({ title, description, slug, id: _id, name, image, level })
    );
  };
  // useEffect(() => {
  //   if (redirect) {
  //     props.history.push("/lectures");
  //   }
  // }, [createErrors, props.history, redirect]);
  useEffect(() => {
    dispatch(homePosts());
  }, [dispatch]);
  // useEffect(() => {
  //   if (redirect) {
  //     dispatch({ type: REDIRECT_FALSE });
  //   }
  // if (message) {
  //   toast.success(message);
  //   dispatch({ type: REMOVE_MESSAGE });
  // }
  // }, [dispatch, redirect]);
  return (
    <>
      <h3 className="admin__heading">Admin Dashboard</h3>
      <div className="admin">
        <>
          <form className="admin__form" onSubmit={createPost}>
            <h3 className="admin__form__header">Create new lecture</h3>
            <div className="admin__form__feild">
              <div>
                <label htmlFor="title">Lecture Title</label>
              </div>
              <input
                type="text"
                name="title"
                id="title"
                value={state.title}
                onChange={handleInput}
                className="admin__form__feild__input"
                placeholder="Lecture Title..."
              />
            </div>
            <div
              className="admin__form__feild"
              onClick={() => {
                setDropdown(!dropdown);
              }}
            >
              <div>
                <label htmlFor="title">Lecture Level</label>
              </div>
              <input
                style={{ cursor: "pointer" }}
                type="text"
                name="title"
                id="title"
                disabled
                value={state.level}
                onChange={handleInput}
                className="admin__form__feild__input"
                placeholder="Lecture Title..."
              />
              {dropdown && (
                <div
                  style={{
                    background: "gray",
                    color: "#fff",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setState({ ...state, level: "Beginner" });
                    }}
                  >
                    Beginner
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setState({ ...state, level: "Intermiddate" });
                    }}
                  >
                    Intermiddate
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setState({ ...state, level: "Advance" });
                    }}
                  >
                    Advance
                  </div>
                </div>
              )}
            </div>
            <div className="admin__form__feild">
              <div>
                <label htmlFor="thumbnail">Thumbnail Image</label>
              </div>
              <FileBase
                // type="file"
                // multiple={false}
                onDone={({ base64 }) => setState({ ...state, image: base64 })}
              />
            </div>
            <div className="admin__form__feild">
              <div>
                <label htmlFor="description">Lecture Description</label>
              </div>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                defaultValue={state.description}
                onChange={handleDescription}
                className="admin__form__feild__textFeild"
                placeholder="Lecture Description..."
                maxLength="150"
              ></textarea>
            </div>
            <div className="admin__form__feild">
              <div>
                <label htmlFor="slug">Lecturer Name</label>
              </div>
              <input
                type="text"
                name="slug"
                id="slug"
                value={state.slug}
                onChange={handleInput}
                className="admin__form__feild__input"
                placeholder="Lecturer Name"
              />
            </div>
            <div className="admin__form__feild">
              <input
                type="submit"
                value={loading ? "Loading..." : "Create post"}
                className="admin__form__feild__btn"
              />
            </div>
          </form>
        </>
        <>
          <div>
            {!loading ? (
              <div>
                {posts?.map((item, index) => (
                  <>
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
                    {/* )} */}
                  </>
                ))}
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </>
      </div>
    </>
  );
};

export default AdminDashboard;
