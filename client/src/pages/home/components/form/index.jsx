import PropTypes from "prop-types";

import Input from "~/components/input";

export default function Form({ handleSubmitForm }) {
  return (
    <form className="mt-12 flex flex-col gap-y-4" onSubmit={handleSubmitForm}>
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
      <div>
        <Input type="password" name="password" placeholder="Şifre" />
      </div>

      <div>
        <button
          type="submit"
          className="w-full h-14 font-semibold text-xl bg-red-600 rounded-md hover:bg-red-700 transition-colors duration-200 text-white"
        >
          Kayıt ol
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};
