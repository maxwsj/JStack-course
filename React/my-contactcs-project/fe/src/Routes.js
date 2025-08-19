import { Container as EditContact } from "pages/EditContact";
import Home from "pages/Home";
import NewContact from "pages/NewContact";
import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  );
}
