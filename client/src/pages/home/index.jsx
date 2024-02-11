import { Link } from "react-router-dom";
import Title from "~/components/title";

export default function Home() {
  return (
    <>
      <div className="container mx-auto min-h-screen">
        <div className="max-w-sm">
          <Link to="/">
            <Title>Home</Title>
          </Link>

          <Link to="/auth/sign-up">Kayıt ol</Link>
          <Link to="/auth/sign-in">Giriş yap</Link>
        </div>
      </div>
    </>
  );
}
