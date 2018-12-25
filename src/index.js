import React from 'react'
import ReactDOM from 'react-dom'
import Table from './pages/Table/Table'
import Panel from './pages/Panel/Panel'
import Form from './pages/Form/Form'
import './style.scss'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            PanelObj:{},
            FormObj:{},
            TableObj:{}
        }
    }
    btnClick = (data)=>{
        this.setState({
            'PanelObj':data,
            'TableObj':data
        });
    }
    panelProps = (item)=>{
        this.setState({
            'PanelObj':item
        });
        this.formProps(
            {
                name:'',
                id:'',
                job:'',
                industry:'',
                address:'',
                phone:'',
                experience:'' 
            }
        )
    }
    formProps =(item)=>{
        this.setState({
            'FormObj':item
        })
    }
    render() {
        return (
            <div className="box">
                <div className="nav_left">
                    <Table content={this.state.TableObj} panelProps={(item)=>{this.panelProps(item)}}/>
                </div>
                <div className="nav_right">
                    <Panel content={this.state.PanelObj} formProps={(item)=>{this.formProps(item)}}/>
                    <Form content={this.state.FormObj} btnClick={(data)=>{this.btnClick(data)}}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

