import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import ClassMessage from './ClassMessage';
import FunctionalMessage from './FunctionalMessage';
// ContextApi imports
import ExampleClassContextProvider, {
  ExampleClassContext,
} from './ClassContext';
import ExampleFunctionContextProvider from './FunctionalContext';

export default class AppContextExample extends Component {
  changeMessage = (e, dispatch) => {
    dispatch({ type: 'CHANGE_MESSAGE' });
  };

  render() {
    return (
      <React.Fragment>
        <ExampleClassContextProvider>
          <ExampleClassContext.Consumer>
            {(context) => {
              const { dispatch } = context;
              return (
                <Card
                  title='Context with Class'
                  footer={
                    <span>
                      <Button
                        label='Change Message'
                        className='p-button-secondary'
                        onClick={() => {
                          this.changeMessage(this, dispatch);
                        }}
                      />
                    </span>
                  }
                  className='p-col-12 p-lg-6 p-lg-offset-3'
                  style={{ textAlign: 'center', marginTop: '60px' }}
                >
                  <ClassMessage />
                </Card>
              );
            }}
          </ExampleClassContext.Consumer>
        </ExampleClassContextProvider>

        <ExampleFunctionContextProvider>
          <FunctionalMessage />
        </ExampleFunctionContextProvider>
      </React.Fragment>
    );
  }
}
