import React from "react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { setAdminPost, updateAction } from "../../../store/actions/post.action";
// import toast, { Toaster } from "react-hot-toast";
import FileBase from "react-file-base64";

const AdminDashboard = (props) => {
  const { createErrors, redirect, loading } = useSelector(
    (state) => state.post
  );
  const [currentImage, setCurrentImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const dispatch = useDispatch();
  const {
    user: { _id, name },
  } = useSelector((state) => state.auth);
  const fileHandle = (e) => {
    if (e.target.files.length !== 0) {
      setCurrentImage(e.target.files[0].name);
      setState({
        ...state,
        [e.target.name]: e.target.files[0],
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const [state, setState] = useState({
    title: "",
    description: "",
    image: "",
  });
  const handleDescription = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const [slug, setSlug] = useState("");
  const [slugButton, setSlugButton] = useState(false);
  const slugHandle = (e) => {
    setSlugButton(true);
    setSlug(e.target.value);
  };
  const handleURL = (e) => {
    e.preventDefault();
    setSlug(slug.trim().split(" ").join("-"));
  };
  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    const createSlug = e.target.value.trim().split(" ").join("-");
    setSlug(createSlug);
  };
  const [value, setValue] = useState("");
  const createPost = (e) => {
    e.preventDefault();
    const { title, description, image } = state;
    dispatch(setAdminPost({ title, description, slug, id: _id, name, image }));
  };
  useEffect(() => {
    if (redirect) {
      props.history.push("/lectures");
    }
    //   if (createErrors.length !== 0) {
    //     createErrors.map((err) => toast.error(err.msg));
    //   }
  }, [createErrors, props.history, redirect]);
  return (
    <>
      <div className="container">
        <form onSubmit={createPost}>
          <div className="row ml-minus-15 mr-minus-15">
            <div className="col-6 p-15">
              <div className="card">
                <h3 className="card__h3">Create a new post</h3>

                <div className="group">
                  <label htmlFor="title">Post Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={state.title}
                    onChange={handleInput}
                    className="group__control"
                    placeholder="Post title..."
                  />
                </div>
                <FileBase
                  // type="file"
                  // multiple={false}
                  onDone={({ base64 }) => setState({ ...state, image: base64 })}
                />
                {/* <div className="group">
                  {currentImage && (
                    <label htmlFor="image" className="image__label">
                      Choosing Image : {currentImage}
                    </label>
                  )}
                  {!currentImage && (
                    <label htmlFor="image" className="image__label">
                      Choose Image
                    </label>
                  )}

                  <input
                    type="file"
                    name="image"
                    id="image"
                    placeholder="Post title ..."
                    onChange={fileHandle}
                  />
                </div> */}
                <div className="group">
                  <label htmlFor="body">Post body</label>
                  <ReactQuill
                    theme="snow"
                    id="body"
                    placeholder="Post body..."
                    value={value}
                    onChange={setValue}
                  />
                </div>
                <div className="group">
                  <label htmlFor="description">Meta Description</label>
                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    defaultValue={state.description}
                    onChange={handleDescription}
                    className="group__control"
                    placeholder="meta description..."
                    maxLength="150"
                  ></textarea>
                  <div className="row">
                    <p className="length">
                      {state.description ? state.description.length : ""}
                    </p>
                    <p style={{ marginTop: "10px" }}>
                      {state.description ? "/max-length: 150" : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 p-15">
              <div className="card">
                <div className="group">
                  <label htmlFor="slug">Post URL</label>
                  <input
                    type="text"
                    name="slug"
                    id="slug"
                    value={slug}
                    onChange={slugHandle}
                    className="group__control"
                    placeholder="Post URL..."
                  />
                </div>
                <div className="group">
                  {slugButton ? (
                    <button class="btn btn-default" onClick={handleURL}>
                      Update Slug
                    </button>
                  ) : (
                    ""
                  )}
                </div>
                <div className="group">
                  <div className="imagePreivew">
                    {imagePreview ? <img alt="" src={imagePreview} /> : ""}
                  </div>
                </div>

                <div className="group">
                  <input
                    type="submit"
                    value="Create post"
                    className="btn btn-default btn-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminDashboard;
