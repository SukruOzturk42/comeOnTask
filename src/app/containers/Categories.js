import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

function Categories(props) {
  const { setSelectedCat, setSearchGameText, seearchGameText } = props;
  const [catagories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
  }, []);

  return (
    <>
      <h1>Catagories</h1>
      <input
        type="text"
        id="seachGameText"
        autoComplete="off"
        onChange={(e) => setSearchGameText(e.target.value)}
        value={seearchGameText}
        placeholder={"Search Game"}
      />
      <ListGroup>
        {catagories.map((cat) => (
          <ListGroup.Item key={cat.id} onClick={() => setSelectedCat(cat.id)}>
            {cat.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default Categories;
