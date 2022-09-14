interface Props {
  data?: any;
  error?: {
    code: string;
  };
}

const serviceResult = ({ data, error }: Props) => {
  if (error) {
    return { error, isSuccess: false };
  }

  return { data, isSuccess: true };
};

export { serviceResult };
