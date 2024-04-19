import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";
import Modal from "./components/modal";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="learn react" />
      <Todo text="master react" />
      <Todo text="explore the full react course" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
