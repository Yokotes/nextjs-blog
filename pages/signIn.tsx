import { useRouter } from "next/router";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import { setCurrentUser } from "../slices/profileSlice";

export default function signIn() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch(`http://localhost:4200/users?username=${formData.get('username')}`,
    {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    });
    const user = (await response.json())[0];

    if (!user) {
      alert("Wrong name or password!");
      return;
    }

    if (user.password === formData.get('password')) {
      dispatch(setCurrentUser(user.username));
      router.push('/');
      return;
    }

    alert('Wrong name or password');
  }

  return (
    <Layout title="Sign In">
      <div className="page">
        <PageTitle>
          Sign In
        </PageTitle>
        <div className="align-center">
          <Form 
            onSubmit={handleSubmit}
            className="form"
          >
            <>
              <Input 
                id="signIn-login"
                label="Login:"
                className="form-input"
                name="username"
              />
              <Input 
                id="signIn-password"
                label="Password:"
                className="form-input"
                isPassword={true}
                name="password"
              />
              <Button
                className="form-btn"
              >
                Sign In
              </Button>
            </>
          </Form>
        </div>
      </div>
    </Layout>
  )
}