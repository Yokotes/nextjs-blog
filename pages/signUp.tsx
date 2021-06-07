import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

export default function signUp() {
  return (
    <Layout title="Sign Up">
      <div className="page">
        <PageTitle>
          Sign Up
        </PageTitle>
        <div className="align-center">
          <Form className="form">
            <>
              <Input 
                id="signUp-login"
                label="Login:"
                className="form-input"
              />
              <Input 
                id="signUp-password"
                label="Password:"
                className="form-input"
                isPassword={true}
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
