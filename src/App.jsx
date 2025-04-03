import { Route, Routes } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";
import { HomePage } from "./Pages/HomePage";
import { TopicPage } from "./Pages/TopicPage";
import { SingleNewPage } from "./Pages/SingleNewPage";
import { ContactPage } from "./Pages/ContactPage";
import { TechRapsodyPage } from "./Pages/TechRapsodyPage";
import { SubscribePage } from "./Pages/SubscribePage";
import "./App.css"



function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/Topic" element={<TopicPage/>} />
        <Route path="/single" element={<SingleNewPage />} />
        <Route path="/subscribe" element={<SubscribePage/>} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Rapsodhy" element={<TechRapsodyPage/>} />
      </Routes>
    </>
  );
}

export default App;
