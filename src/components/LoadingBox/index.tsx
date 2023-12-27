type Props = {
  isLoading: boolean;
  children: React.ReactNode;
};

const LoadingBox = ({ isLoading, children }: Props) => {
  if (isLoading) {
    return <div>LoadingBox</div>;
  }

  return children;
};

export default LoadingBox;
