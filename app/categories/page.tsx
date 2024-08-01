import ExpandableList from "../components/ExpandableList";

const listItems = [
  { id: 1, title: "Item 1", content: "This is the content for Item 1." },
  { id: 2, title: "Item 2", content: "This is the content for Item 2." },
  { id: 3, title: "Item 3", content: "This is the content for Item 3." },
  { id: 4, title: "Item 4", content: "This is the content for Item 4." },
];

export default function Home() {
  return (
    <main>
      <ExpandableList items={listItems} />
    </main>
  );
}
