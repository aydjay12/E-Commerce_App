import styled from "styled-components";
import { categories } from "../data";
import { categories2 } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px;
  padding-bottom: 0;
  justify-content: space-between;
  ${mobile({
    padding: "0px",
    flexDirection: "column",
    display: "flex",
  })}
`;

const Container2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  padding-top: 0;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column", display: "flex" })}
`;

const Categories = () => {
  return (
    <div>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
      <Container2>
        {categories2.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container2>
    </div>
  );
};

export default Categories;
