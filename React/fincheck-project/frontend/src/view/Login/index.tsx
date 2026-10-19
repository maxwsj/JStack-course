import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useLoginController } from "./useLoginController";

export function Login() {
  const { handleSubmit, register, errors } = useLoginController();

  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold tracking-[-1px] text-gray-900">
          Entre em sua conta
        </h1>

        <p className="space-x-2">
          <span className="tracking-[-0.5px] text-gray-700">
            Novo por aqui?
          </span>
          <Link
            to="/register"
            className="font-medium tracking-[-0.5px] text-teal-900"
          >
            Crie uma conta
          </Link>
        </p>
      </header>

      <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-4">
        <Input {...register("email")} type="email" placeholder="E-mail" />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
        <Input {...register("password")} type="password" placeholder="Senha" />
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password.message}
          </span>
        )}

        <Button type="submit" className="mt-2">
          Entrar
        </Button>
      </form>
    </>
  );
}
