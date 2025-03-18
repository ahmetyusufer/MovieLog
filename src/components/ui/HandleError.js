import { useSelector } from "react-redux";

function HandleError() {
  const { error } = useSelector((state) => state.moviesSlice);
  return <div className="error">{error}</div>;
}

export default HandleError;
