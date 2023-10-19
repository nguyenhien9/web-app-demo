import React, { useState } from "react";
import { Loading, SelectLanguages } from "../components";
const LanguagesSelectPage = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div className="max-w-lg mx-auto w-screen bg-launch-page bg-cover bg-center bg-no-repeat min-h-screen">
      {loading ? <Loading /> : <SelectLanguages />}
    </div>
  );
};

export default LanguagesSelectPage;
