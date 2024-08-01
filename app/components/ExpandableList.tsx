"use client";

import React, { useState } from "react";
import styles from "../categories/ExpandableList.module.css";

interface ListItem {
  id: number;
  title: string;
  content: string;
}

interface ExpandableListProps {
  items: ListItem[];
}

const ExpandableList = ({ items }: ExpandableListProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null); //declares a state variable

  const toggleItem = (id: number) => {
    setExpandedId(expandedId === id ? null : id); //updates the expandedId to 'id' if it's not equal to null(clicking on an empty space)
  };

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li
          key={item.id}
          className={`${styles.listItem} ${
            expandedId === item.id ? styles.expanded : ""
          }`}
          onClick={() => toggleItem(item.id)}
        >
          <h3>{item.title}</h3>
          <div className={styles.content}>
            <p>{item.content}</p>
            <button className={styles.button}>Action</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExpandableList;
