function Input({ children, className, ...props }) {
  return (
    <input className={`p-2 ${className ? className : ""}`} {...props}>
      {children}
    </input>
  );
}

export default Input;
