import logo from './logo.svg';
import './App.css';
import { Page, H1, BackLink } from 'govuk-react';

function App() {
  return (
    <div className="App">
      <Page beforeChildren={<BackLink href="#">Back</BackLink>}>
        <H1>
          Page Title
        </H1>
      </Page>
    </div>
  );
}

export default App;
