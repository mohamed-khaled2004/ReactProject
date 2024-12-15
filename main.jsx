import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import { ProjectProvider } from "./Components/projectcountext.jsx";
import { RecoilRoot } from "recoil";

const root = document.getElementById("root");
createRoot(root).render(
  <ProjectProvider>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ProjectProvider>
);
