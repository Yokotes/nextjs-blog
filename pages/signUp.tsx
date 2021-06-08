import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import { setCurrentUser } from "../slices/profileSlice";

export default function signUp() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4200/users',
    {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    });
    const users = await response.json();
    const formData = new FormData(e.target as HTMLFormElement);

    const { status, statusText } = await axios.post('http://localhost:4200/users', {
      id: users.length+1,
      username: formData.get('username'),
      password: formData.get('password')
    });
    
    if (status !== 201) {
      alert(statusText);
      return;
    }

    dispatch(setCurrentUser(formData.get('username')));
    router.push('/');
  }

  return (
    <Layout title="Sign Up">
      <div className="page">
        <PageTitle>
          Sign Up
        </PageTitle>
        <div className="align-center">
          <Form 
            className="form"
            onSubmit={handleSubmit}
          >
            <>
              <Input 
                id="signUp-login"
                label="Login:"
                className="form-input"
                name="username"
              />
              <Input 
                id="signUp-password"
                label="Password:"
                className="form-input"
                isPassword={true}
                name="password"
              />
              <Button
                className="form-btn"
              >
                Create an account
              </Button>
            </>
          </Form>
        </div>
      </div>
    </Layout>
  )
}
