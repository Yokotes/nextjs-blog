import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";

export default function signIn() {
  return (
    <Layout title="Sign In">
      <div className="page">
        <PageTitle>
          Sign In
        </PageTitle>
        <div className="align-center">
          <Form className="form">
            <>
              <Input 
                id="signIn-login"
                label="Login:"
                className="form-input"
              />
              <Input 
                id="signIn-password"
                label="Password:"
                className="form-input"
                isPassword={true}
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
