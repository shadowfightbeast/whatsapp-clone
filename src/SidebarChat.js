import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query, addDoc } from "firebase/firestore";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
import db from "./firebase"
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");
  useEffect(() => {
    if (id) {
      const messagesQuery = query(
        collection(db, 'rooms', id, 'messages'),
        orderBy('timestamp', "desc")
      );
      const unsubscribe = onSnapshot(messagesQuery, (snapshot) =>
        setMessages(snapshot.docs.map((doc) =>
          doc.data()))
      );
      return () => unsubscribe();
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 3000));
  }, []);
  const createChat = async () => {
    const roomName = prompt("please enter a name for chat");
    if (roomName) {
      await addDoc(collection(db, "rooms"), {
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarchat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarchat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
