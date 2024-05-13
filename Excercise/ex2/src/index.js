import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyButton from "./MyButton";

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
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
    <MyButton />
    {companies.map((company, index) => (
      <div key={index}>
        <p>
          {company.name} {company.category} {company.start} {company.end}
        </p>
      </div>
    ))}
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
