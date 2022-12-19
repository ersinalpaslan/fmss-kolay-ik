import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import UserList from './UserList';
import UserEdit from "./UserEdit";
import UserAdd from "./UserAdd";
import UserView from "./UserView";
import LeavesList from './LeavesList';
import LeaveEdit from './LeaveEdit';
import AddLeaveFromUsers from './AddLeaveFromUsers';
import LeaveView from './LeaveView';
import ExpenseList from './ExpenseList';
import ExpenseEdit from './ExpenseEdit';
import AddExpenseFromUsers from './AddExpenseFromUsers';
import ExpenseView from './ExpenseView';
import Home from './Home';
import Navbar from './components/NavBar';
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact={true} component={UserList}/>
            <Route path='/users' exact={true} component={UserList}/>
            <Route path='/users/:id' component={UserEdit}/>
            <Route path='/adduser' component={UserAdd}/>
            <Route path='/viewuser/:id' component={UserView}/>
            <Route path='/leaves'exact={true}  component={LeavesList}/>
            <Route path='/leaves/:id' component={LeaveEdit}/>
            <Route path='/leavesfromuser/:id' component={AddLeaveFromUsers}/>
            <Route path='/viewleaves/:id' component={LeaveView}/>
            <Route path='/expenses'exact={true}  component={ExpenseList}/>
            <Route path='/expenses/:id' component={ExpenseEdit}/>
            <Route path='/expensesfromuser/:id' component={AddExpenseFromUsers}/>
            <Route path='/viewexpenses/:id' component={ExpenseView}/>
        </Switch>
    </Router>
    )
  }
}
export default App;
