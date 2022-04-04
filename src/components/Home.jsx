import { useContext } from "react";
import { UseAuthReg } from "../context/auth-reg";
function Home() {
  const { user } = useContext(UseAuthReg);

  return <div>Welcome {user?.email}</div>;
}

export default Home;
