import React, { Fragment, useEffect, useState } from "react";
import "./Blog.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createBlog } from "../../Actions/UserAction.js";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../MetaData/MetaData";
import DescriptionIcon from "@material-ui/icons/Description";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import { NEW_BLOG_RESET } from "../../Constants/UserConstants.js";

const Blog = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.blogs);

  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  const [images, setImages] = useState([]);
  console.log(images);
  const [imagesPreview, setImagesPreview] = useState([]);

  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Blog Post Successfully");
      history.push("/");
      dispatch({ type: NEW_BLOG_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createproductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);

    myForm.set("description", description);



    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createBlog(myForm));
  };

  const createproductImagesChange = (e) => {
    let files = Array.from(e.target.files);
    console.log(files);
    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Create Blog" />
      <div className="">
     
        <div className="newproductContainer">
          <form
            className="createproductForm"
            encType="multipart/form-data"
            onSubmit={createproductSubmitHandler}
          >
            <h1>Create Blog</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Service Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Service Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            

            {/* <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Status"
                required
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>  */}

            <div id="createproductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createproductImagesChange}
                multiple
              />
            </div>

            <div id="createproductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="product Preview" />
              ))}
            </div>

            <Button
              id="createproductBtn"
              type="submit"
            
            >
              Post
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Blog;
