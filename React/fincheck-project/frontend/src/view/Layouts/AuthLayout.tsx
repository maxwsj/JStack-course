import illustration from "../../assets/ilustration.png";
import { Logo } from "../components/Logo";

export function AuthLayout() {
  return (
    <div className="flex h-screen w-full">
      <div className="h-full w-1/2"></div>
      <div className="relative flex h-full w-1/2 items-center justify-center p-8">
        <img
          src={illustration}
          className="user-select-none h-full max-h-[960px] w-full max-w-[656px] rounded-[32px] object-cover"
        />
        <div className="absolute bottom-8 max-w-[656px] rounded-b-[32px] bg-white p-10 text-red-500">
          <Logo />
          <p className="mt-6 text-xl font-medium text-gray-700">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
