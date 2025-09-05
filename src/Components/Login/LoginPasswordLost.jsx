import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";

const LoginPasswordLost = () => {

  const email = useForm();
  const [data, loading, error, request] = useFetch();

  

  async function handleSubmit(event) {
    event.preventDefault();

    request(URL, option)
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Email / Usuario" type="text" name="email" />
        <Button>Enviar Email</Button>
      </form>
    </section>
  );
};

export default LoginPasswordLost;
