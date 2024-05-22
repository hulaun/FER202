import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyButton from "./MyButton";
import Company from "./Companies";

const ChatRoom = [
  {
    id: "room1",
    name: "Demo Chat",
    participants: ["user1", "user2"],
    messages: [
      {
        id: "message1",
        text: "Hi Bob, how are you?",
        senderId: "user1",
        timestamp: "09-04-2024 09:00:00 PM",
      },
      {
        id: "message2",
        text: "Hey Alice, I'm good! How about you?",
        senderId: "user2",
        timestamp: "09-04-2024 09:01:00 PM",
      },
      {
        id: "message3",
        text: "I'm doing well, thanks for asking!",
        senderId: "user1",
        timestamp: "09-04-2024 09:02:00 PM",
      },
    ],
  },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ul
      class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm"
      id="pillNav2"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active rounded-5 bg-info"
          id="home-tab2"
          data-bs-toggle="tab"
          type="button"
          role="tab"
          aria-selected="true"
        >
          Home
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link rounded-5 text-white"
          id="profile-tab2"
          data-bs-toggle="tab"
          type="button"
          role="tab"
          aria-selected="false"
        >
          Profile
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link rounded-5 text-white"
          id="contact-tab2"
          data-bs-toggle="tab"
          type="button"
          role="tab"
          aria-selected="false"
        >
          Contact
        </button>
      </li>
    </ul>
    <div
      class=" text-white border border-secondary shadow rounded-5 mx-2 my-1 px-2 py-4"
      style={{ backgroundColor: "red" }}
    >
      This is a div element with a primary background color, white text, a
      secondary border color, and a shadow.
    </div>

    <MyButton />

    <Company />

    {ChatRoom.map((chatRoom) => (
      <div>
        {chatRoom.name}
        {chatRoom.messages.map((message) => (
          <div key={message.id}>
            {message.senderId}: {message.text}
          </div>
        ))}
      </div>
    ))}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
