interface Props {
  children?: React.ReactNode;
}

const TodoList: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export { TodoList };
