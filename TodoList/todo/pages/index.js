
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import user from '../models/user';
import { useRouter } from 'next/router';
import axios from 'axios';


const AddUser = ({ edited, data}) => {
  const router = useRouter();

  const initialValues = {
    firstname: (edited && data.firstname) || '',
    lastname: (edited && data.lastname) || '',
    email: (edited && data.email) || '',
  };


  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const handleSubmit = async (values) => {
    if (!edited) {
      const res = await axios.post('http://localhost:3000/api/hello', values,{
        headers: {
          'Content-type': 'application/json',
        },
      });
      if (res.status === 200) {
        router.push('./users')
      }
    } else {
      const response = await axios.put('http://localhost:3000/api/hello', {
        _id: data._id,
        ...values,
      }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      if (response.status === 200) {
        console.log('User updated successfully');
        router.push(`./users/${_id}`);
      } else {
        console.error('Failed to update user');
      }
    };
  }

  return (
    <div className=" bg-gradient-to-r from-sky-300 to-indigo-200  mx-auto p-4  bg-white flex flex-col items-center justify-center text-gray-700 h-[508px] ">
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
        <h1 className="text-4xl font-semibold">{!edited ? "ADD ToDo" : "EDIT ToDo"}</h1>
      </div>
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          <Form>
            <div className="mb-4">
              <Field type="text" name="firstname" placeholder="First Name"
                className="p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" />
              <ErrorMessage name="firstname" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <Field type="text" name="lastname" placeholder="Last Name"
                className="p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" />
              <ErrorMessage name="lastname" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <Field type="email" name="email" placeholder="Email"
                className="p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <button type="submit"
              className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900" >
              {!edited ? "ADD" : "EDIT"}</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddUser;
