import { useEffect, useState } from "react";
import Form from "./Componenets/Form";
import Navbar from "./Componenets/Navbar";
import Title from "./Componenets/Title";
import data from "./data";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  function generatePara() {
    let num = Number(count);
    let finalText = data.slice(0, num);
    setText(finalText);
    toast.success(`${finalText.length} paragrapghs generated`);
  }

  return (
    <section>
      <ToastContainer position="top-center" />
      <Navbar onToggleTheme={toggleTheme} />
      <div className="center">
        <Title text="Random Paragrapgh generator" />
        <Form
          count={count}
          onSetCount={setCount}
          onGeneratePara={generatePara}
        />
        {text.map((para, index) => {
          return (
            <p className="paragrapghs" key={index}>
              {para}
            </p>
          );
        })}
      </div>
    </section>
  );
}

export default App;
