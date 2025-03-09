export const Button = ({ onClick, title }) => {
  return (
    <button onClick={onClick} data-testid="my-button">
      {title}
    </button>
  );
};
