import { fireEvent } from "@testing-library/dom";
import { div } from "motion/react-client";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Friends />
        <Formaddfriend />
        <button className="button">Add friend</button>
      </div>
      <Formsplit />
    </div>
  );
}

function Friends() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} ownes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are good gang</p>}

      <button className="button">Select</button>
    </li>
  );
}

function Formaddfriend() {
  return (
    <form className="form-add-friend">
      <label>😘 Friend Name</label>
      <input type="text"></input>
      <label>Image URL</label>
      <input type="text"></input>
      <button className="button">ADD THIS GUY</button>
    </form>
  );
}

function Formsplit() {
  return (
    <form className="form-split-bill">
      <h2>Split the Bill with X</h2>
      <label>😶 Bill value</label>
      <input type="text"></input>
      <label>😭 your expense</label>
      <input type="text"></input>
      <label>😍 x expense</label>
      <input type="text" disabled></input>
      <label>🤑 who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <button className="button">split this nigga</button>
    </form>
  );
}
