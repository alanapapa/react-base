import propTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {
  if (!isLoggedIn) {
    return <div>LOG IN</div>
  }

  return (
    <>
      <h1>{`${name} ${surname} (${age})`}</h1>

      {address.city} {address.zip} <br /> <br />

      {friends &&
        friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
    </>
  );
}

User.propTypes = {
  name: propTypes.string.isRequired,
  surname: propTypes.string,
  age: propTypes.oneOfType([propTypes.number, propTypes.string]),
  isLoggedIn: propTypes.bool,
  friends: propTypes.array,
  address: propTypes.shape({
    city: propTypes.string,
    zip: propTypes.number
  })
};

User.defaultProps = {
  name: "NoName",
  isLoggedIn: false,
  age: 0,
}

export default User;
