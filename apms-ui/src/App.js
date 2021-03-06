import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu } from 'semantic-ui-react';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import PhotosPage from './photos';
import PeoplePage from './people';
import ScrollToTop from './components/scrollToTop';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerPage = () => <SwaggerUI url="/swagger/main.json" docExpansion="list" />;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu fixed="top" inverted>
                        <Container>
                            <Menu.Item as="span" header>
                                <Link to="/">A P M S</Link>
                            </Menu.Item>
                            <Menu.Item as="span">
                                <Link to="/photos">Photos</Link>
                            </Menu.Item>
                            <Menu.Item as="span">
                                <Link to="/people">People</Link>
                            </Menu.Item>
                            <Menu.Item as="span">
                                <Link to="/api-docs">API docs</Link>
                            </Menu.Item>
                        </Container>
                    </Menu>

                    <ScrollToTop>
                        <Container style={{ marginTop: '5em', marginBottom: '5em' }}>
                            <Switch>
                                <Redirect exact from="/" to="/photos" />
                                <Route path="/photos" component={PhotosPage} />
                                <Route path="/people" component={PeoplePage} />
                                <Route path="/api-docs" component={SwaggerPage} />
                            </Switch>
                        </Container>
                    </ScrollToTop>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
