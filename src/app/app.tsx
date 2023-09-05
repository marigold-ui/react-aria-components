import { MySelect, MyItem } from "components/Select";
import { } from 'react-aria-components'
const App = (): JSX.Element => {
  return (
    <>
      <MySelect errorMessage="Oops something went wrong" label="Ice cream flavor">
        <MyItem>Chocolate</MyItem>
        <MyItem>Mint</MyItem>
        <MyItem>Strawberry</MyItem>
        <MyItem>Vanilla</MyItem>
      </MySelect>
    </>
  )
};


export default App;
