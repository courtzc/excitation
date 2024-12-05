import { Breadcrumbs } from "../components/Breadcrumbs";
// import { Breadcrumbs } from "@mui/material";
import {Header} from "../components/Header";
// import {}
// {/* <Breadcrumbs breadcrumbs={[["Home"]]} /> */}
export const Home = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs breadcrumbs={[["Home"]]} />
      <p>
        In the future this is where a user will authenticate and see a list of
        forms to review.
      </p>
    </div>
  );
};
