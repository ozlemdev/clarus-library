import { useAuthContext } from "../context/AuthContext";

const PrivateRouter = () => {
  // const { user } = useContext(AuthContext); // böyle uzun yazıp iki import yapmak yerine custom hook yazarak tek importla contexti kullanabiliyoruz.
  const { user } = useAuthContext();

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
