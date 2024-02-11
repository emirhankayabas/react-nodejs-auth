import { Link } from "react-router-dom";
import Title from "~/components/title";

export default function SignIn() {
  return (
    <div>
      <div className="max-w-sm">
        <Title>Giriş yap</Title>
        <Link to="/">Anasayfa</Link>
      </div>
    </div>
  );
}
