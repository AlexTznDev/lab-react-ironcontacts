import "./App.css";
import Contact from "./contacts.json";
import { useState } from "react";

function App() {
  const [arrState, setArrState] = useState(Contact.slice(0, 5));

  const AddRandomContact = () => {
    const randomNumber = Math.floor(Math.random() * Contact.length);
    setArrState([Contact[randomNumber], ...arrState]);
  };

  const SortByPopularity = () => {
    const sortARRbyPopularity = [...arrState];
    console.log(sortARRbyPopularity);
    sortARRbyPopularity.sort((elem1, elem2) => {
      if (elem1.popularity > elem2.popularity) {
        return +1;
      } else if (elem1.popularity < elem2.popularity) {
        return -1;
      } else {
        return 0;
      }
    });

    setArrState(sortARRbyPopularity);
  };
  const SortByName = () => {
    const sortARRbyName = [...arrState];
    console.log(sortARRbyName);
    sortARRbyName.sort((elem1, elem2) => {
      if (elem1.name[0] > elem2.name[0]) {
        return +1;
      } else if (elem1.name[0] < elem2.name[0]) {
        return -1;
      } else {
        return 0;
      }
    });

    setArrState(sortARRbyName);
  };

  const DeleteContact = (idElement) => {
    const arrayFilter = arrState.filter((eachElement) => {
      if (idElement === eachElement.id) {
        return false;
      } else return true;
    });

    setArrState(arrayFilter);
  };

  return (
    <div className="App">
      <div className="headDiv" style={{ marginTop: "20px" }}>
        <button onClick={() => AddRandomContact()}>Add random Contact</button>
        <button onClick={() => SortByPopularity()}>Sort by popularity</button>
        <button onClick={() => SortByName()}>Sort by name</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {arrState.map((eachElement, index) => {
              return (
                <tr key={eachElement.id + index}>
                  <td>
                    <img
                      src={eachElement.pictureUrl}
                      alt={eachElement.name}
                      width="100px"
                    />
                  </td>
                  <td>{eachElement.name}</td>
                  <td>{eachElement.popularity.toFixed(2)}</td>
                  <td>{eachElement.wonOscar === true ? "🏆" : null}</td>
                  <td>{eachElement.wonEmmy === true ? "🏆" : null}</td>
                  <td>
                    <button onClick={() => DeleteContact(eachElement.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
