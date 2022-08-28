import { useState } from "react";

const PageNumbers = ({ paginate, itemsPerPage, totalItems }) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageNumberHandler = (event) => {
    setSelectedButton(parseInt(event.target.innerHTML));
    paginate(parseInt(event.target.innerHTML));
  };

  const buttonClasses = " px-2";
  const buttonClassesActive =
    "px-2 font-bold rounded-full bg-custom-orange text-custom-white";

  return (
    <nav className="flex bg-custom-white w-fit rounded-lg px-2 py-2">
      <p className="font-semibold mr-2">Pages:</p>

      <ul className="flex">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={pageNumberHandler}
              className={
                number === selectedButton ? buttonClassesActive : buttonClasses
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PageNumbers;
