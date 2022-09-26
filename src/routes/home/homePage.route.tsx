import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Directory } from "../../components/directory/directory.component";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import { useAppDispatch } from "../../types/hooks/hooks";
const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);
  return (
    <div className="HomePage">
      <Outlet />
      <Directory />
    </div>
  );
};
export default HomePage;
