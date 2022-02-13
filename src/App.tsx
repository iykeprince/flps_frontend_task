import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/molecules/Navbar";
import Notification from "./components/molecules/Notification";
import TemplateView from "./components/molecules/TemplateView";
import DefaultLayout from "./layouts/DefaultLayout";
import templateContext from "./context/template.context";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import { fetchTemplates } from "./app/features/template/templateSlice";
import appContext from "./context/app.context";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const templateState = useSelector((state: RootState) => state.template);

  const loadTemplatesAsync = async () => {
    await dispatch(fetchTemplates()).unwrap();
  };

  React.useEffect(() => {
    loadTemplatesAsync();
  }, []);

  return (
    <appContext.Provider value={templateState}>
      <DefaultLayout>
        <Navbar />
        <Notification />
        <TemplateView />
      </DefaultLayout>
    </appContext.Provider>
  );
}

export default App;
