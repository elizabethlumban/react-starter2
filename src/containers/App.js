import React, { Component } from "react";
import { addItem, getItems } from "../actions/items";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "react-router-redux";
import Item from "../components/item";
import NewItemForm from "../components/newItemForm";
import { Switch, Route } from "@team-griffin/react-router-connected";
import RaisedButton from "material-ui/RaisedButton";
import PropTypes from 'prop-types';

// Export App so it can be tested as a component
export class App extends Component {

    componentWillMount() {
        this.props.actions.getItems();
    }

    render() {
        return (
            <div>
                {this.aboutSection()}
                <Switch>
                    <Route exact path={"/:id"} render={(props) => this.singleItem(props)} />
                    <Route exact path={"/"} render={() => this.allItems()} />
                </Switch>
            </div>
        );
    }

    singleItem(routeProps) {
        const { items, actions: { changeRoute } } = this.props;
        const itemId = routeProps.match.params.id;
        const item = items.find(i => i.id === itemId);

        if (item) {
            return (<div>
                <h2>Single Item View</h2>
                <Item item={item} />
                <RaisedButton label="View All" onClick={() => changeRoute("/")} />
            </div>);
        } else {
            return <div>
                <h2>Item Not Found</h2>
                <RaisedButton label="View All" onClick={() => changeRoute("/")} />
            </div>;
        }
    }

    allItems() {
        const { items, actions: { addItem } } = this.props;
        return (<div>
            <h2>Item List View</h2>
            <ul>
                {items.map((i, k) => <li key={k}><Item item={i} /></li>)}
            </ul>
            <NewItemForm onSubmit={(e) => addItem(e)} />
        </div>);
    }

    aboutSection() {
        return (<div>
            <h1>React-Redux boilerplate</h1>
            <p>This is a boilerplate React-Redux app with the following additions:</p>
            <ul>
                <li>React Router v4 and Redux React Router;</li>
                <li>Material UI components with a theme;</li>
                <li>Redux-Form and its Material-UI integration;</li>
                <li>Redux Promises Middleware;</li>
                <li>API integration with native fetch (via promises);</li>
                <li>Express JS reverse proxy that also serves the web content;</li>
                <li>Unit testing with Jest and Enzyme;</li>
            </ul>
            <hr />
        </div>);
    }
}

App.propTypes = {
    items: PropTypes.array,
    actions: PropTypes.any,
};

function mapStateToProps(state) {
    return { items: state.items };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            addItem,
            getItems,
            changeRoute: url => push(url)
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
