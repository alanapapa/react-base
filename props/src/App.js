import User from "./components/User";

const friends = [
  {
    id: 0,
    name: "Martin"
  },
  {
    id: 1,
    name: "Luter"
  },
  {
    id: 2,
    name: "King"
  }
];

function App() {
  return (
    <>
      <User
        name="Doctor"
        surname="Who"
        isLoggedIn={true}
        age={26}
        friends={friends}
        address={{
          city: 'Antalya',
          zip: 5095
        }}
      />
    </>
  );
}

export default App;
