function Button({ children }) {
  return (
    <button
      className="
      bg-black
      text-white
      px-8
      py-3
      rounded-full
      hover:bg-yellow-700
      duration-300
      cursor-pointer
      "
    >
      {children}
    </button>
  );
}

export default Button;