import React, { useEffect, useState } from "react";
import { submitComment } from "../services";
import * as Yup from "yup";
import { Formik, Form } from "formik";

const CommentsForm = ({ slug }: any) => {
  const handleCommentSubmission = (data: any) => {
    const { name, email, comment } = data;
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };
    submitComment(commentObj).then((res: any) => {
      console.log(res);

      // if (res.createComment) { }
    });
  };
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          Leave a Reply
        </h3>
        <Formik
          initialValues={{
            comment: "",
            name: "",
            email: "",
          }}
          validationSchema={Yup.object().shape({
            comment: Yup.string().min(30).required("Required"),
            name: Yup.string().required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={(values) => {
            handleCommentSubmission(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea
                  className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                  name="comment"
                  placeholder="Comment"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comment}
                />
                {touched.comment && errors.comment && (
                  <p id="comment">{errors.comment}</p>
                )}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input
                  className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {touched.name && errors.name && <p id="name">{errors.name}</p>}
                <input
                  className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <p id="email">{errors.email}</p>
                )}
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
                >
                  Post Comment
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CommentsForm;
