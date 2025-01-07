import { useForm } from "react-hook-form";
import '../src/App.css'

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));


  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} type="email" placeholder="Email"  />
        <br />
        <input {...register("password")} type="password" placeholder="password"  />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default App
