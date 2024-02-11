import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import Input from "~/components/input";
import Button from "~/components/button";
import Divider from "~/components/divider";

import { BsBoxArrowRight } from "react-icons/bs";
import { SlArrowLeft } from "react-icons/sl";

export default function Form({ handleSubmitForm }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const continueParam = queryParams.get("continue");
  const domain = window.location.origin;
  const continuePath = continueParam ? `${domain}/${continueParam}` : "/";

  return (
    <form className="mt-12 flex flex-col gap-y-5" onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-2 gap-x-2">
        <div>
          <Input type="text" name="firstName" placeholder="Ad" />
        </div>
        <div>
          <Input type="text" name="lastName" placeholder="Soyad" />
        </div>
      </div>
      <div>
        <Input type="email" name="email" placeholder="E-posta" />
      </div>
      <div className="relative">
        <Input type="password" name="password" placeholder="Şifre" />
      </div>

      <Button icon={BsBoxArrowRight} type="submit">
        Kayıt ol
      </Button>

      <Divider text="veya" />

      <Link
        to={continuePath}
        className="w-full h-16 flex items-center justify-center font-semibold text-2xl bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 text-white relative"
      >
        <span className="absolute top-1/2 left-4 -translate-y-1/2">
          <SlArrowLeft size={20} />
        </span>
        <span className="-mt-0.5">Geri dön</span>
      </Link>
    </form>
  );
}

Form.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};
