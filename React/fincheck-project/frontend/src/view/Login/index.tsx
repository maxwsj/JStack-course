import { Link } from "react-router-dom";

export function Login() {
  return (
    <div>
      <header className="flex flex-col items-center gap-4">
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
    </div>
  );
}
