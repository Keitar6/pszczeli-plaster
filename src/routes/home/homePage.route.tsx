import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Directory } from "../../components/directory/directory.component";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import { useAppDispatch } from "../../hooks/hooks";
import { categoriesCollection } from "../../utils/firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { Category } from "../../store/categories/category.types";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onSnapshot(categoriesCollection, (snapshot) => {
      const tempCategArray = snapshot.docs.map((d) => d.data());
      dispatch(fetchCategoriesAsync(tempCategArray as Category[]));
    });
  }, []);

  return (
    <>
      <Outlet />
      <Directory />
    </>
  );
};
export default HomePage;
