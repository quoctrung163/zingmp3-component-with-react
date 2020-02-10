import React from "react";
import SongItem from "./components/SongItem";
import "./styles.css";

export default function App() {
  const item = [
    {
      title: "Ly Cà Phê Cạnh Bên Ô Cửa Sổ",
      singer: "Charles Huỳnh",
      time: "5:24",
      view: "13.097"
    },
    {
      title: "Ly Cà Phê Cạnh Bên Ô Cửa Sổ 2",
      singer: "Charles Huỳnh 2",
      time: "5:24",
      view: "13.097"
    },
    {
      title: "Ly Cà Phê Cạnh Bên Ô Cửa Sổ 2",
      singer: "Charles Huỳnh 2",
      time: "5:24",
      view: "13.097"
    },
    {
      title: "Ly Cà Phê Cạnh Bên Ô Cửa Sổ 2",
      singer: "Charles Huỳnh 2",
      time: "5:24",
      view: "13.097"
    },
    {
      title: "Ly Cà Phê Cạnh Bên Ô Cửa Sổ 2",
      singer: "Charles Huỳnh 2",
      time: "5:24",
      view: "13.097"
    },
    {
      title: "Ly Cà Phê Cạnh Bên Ô Cửa Sổ 2",
      singer: "Charles Huỳnh 2",
      time: "5:24",
      view: "13.097"
    }
  ];
  return <SongItem item={item} />;
}
