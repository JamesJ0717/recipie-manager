import React, { useState } from "react";
import { Container } from "reactstrap";

import RecipieViewer from "./Components/RecipieViewer";
import RecipieEditor from "./Components/RecipieEditor";
import Nav from "./Components/Navbar";

function App() {
  const [recipie, setRecipie] = useState(null);

  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }}>
      <Nav setRecipie={setRecipie} />
      <Container fluid>
        <RecipieViewer canEdit={() => true} onEdit={(recipie) => setRecipie(recipie)} />
        {recipie && <RecipieEditor recipieE={recipie} onClose={() => setRecipie(null)} />}
      </Container>
    </div>
  );
}

export default App;
