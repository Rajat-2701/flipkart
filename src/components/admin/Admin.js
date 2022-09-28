import React, { useEffect, useState } from "react";
import "././Admin.css";
const Admin = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category_id: "",
    rating: "",
    price: "",
    image: "",
  });
  function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = element.scrollHeight + "px";
  }

  // function to get categories from backend:
  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/getCategory";
    const getCategory = () => {
      fetch(url)
        .then((response) => response.json())
        .then((actualData) => setCategories(actualData?.data));
    };
    getCategory();
  }, []);

  //   function for uploading multiple images at a time :
  // const multipleFiles = (files) => {
  //   // setImages(file[0]);
  //   // const selectedFiles = [];
  //   // const targetedFiles = e.target.files;
  //   // const targetFilesObject = [...targetedFiles];
  //   // targetFilesObject.map((file) => {
  //   //   return selectedFiles.push(URL.createObjectURL(file));
  //   // });
  //   const frmData = new FormData();
  //   for (let i = 0; i < files.length; i++) {
  //     console.log("inside for");
  //     frmData.append(files[i].name, files[i]);
  //   }
  //   console.log("frmData", frmData);
  //   setFormData({ ...formData, image: frmData });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("formData", formData);
  //   fetch("http://127.0.0.1:8000/api/addProducts", {
  //     method: "POST",
  //     body: JSON.stringify(formData),
  //     headers: { "Content-Type": "multipart/form-data" },
  //   }).then((response) => console.log(response));
  // };

  return (
    <section className="contact-wrap">
      <div className="overlay"></div>
      <form
        action="http://127.0.0.1:8000/api/addProducts"
        method="post"
        // onSubmit={handleSubmit}
        className="contact-form shadow-2xl p-5 rounded-lg bg-white"
        encType="multipart/form-data"
      >
        {/* <hr className="w-[70%]" /> */}
        <br />
        <h2 className="text-white font-semibold border-2 border-black solid p-2 rounded-xl bg-black text-2xl text-center text-uppercase">
          Add New Product
        </h2>{" "}
        <br />
        {/* <hr className="w-[70%] ml-auto" /> */}
        <br />
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="title">Title</label>
            <div className="input-block">
              <input
                className="form-control"
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="description">Description</label>
            <div className="input-block" oninput="auto_grow(this)">
              <textarea
                className="form-control p-2 textarea overflow-hidden"
                // type="textarea"
                oninput="auto_grow(this)"
                name="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
          </div>
          {/* Category */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="category">Category</label>
            <div className="input-blocks">
              <select
                name="category_id"
                onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                className="category-dropdown"
              >
                <option value="Select Categoyr">Select Category</option>
                {categories.map((item) => {
                  return (
                    <option key={item.id} value={item.id} className="category-name">
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {/* Rating */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="rating">Rating</label>
            <div className="input-block">
              <input
                className="form-control"
                type="number"
                name="rating"
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
              />
            </div>
          </div>
          {/* Price */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <label htmlFor="price">Price (&#8377;)</label>
            <div className="input-block">
              <input
                className="form-control mt-1"
                type="text"
                name="price"
                value={formData.price}
                // onKeyDown={(event) => {
                //   if (event.target.value.length == 11) return false; //limits to 10 digit entry
                //   setPrice(event?.target.value); //saving input to state
                // }}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <button className="square-button" type="submit">
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Admin;
