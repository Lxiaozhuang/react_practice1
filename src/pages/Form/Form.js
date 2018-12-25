import React from 'react'

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            id:'',
            job:'',
            industry:'',
            address:'',
            phone:'',
            experience:''
        }
        this.inputChange = this.inputChange.bind(this);
        this.handRowBtnClick = this.handRowBtnClick.bind(this)
        this.selectChange = this.selectChange.bind(this)
    }
    inputChange(e){
        // console.log(e.target.name)
        switch (e.target.name){
            case 'name':
                this.setState({
                    'name':e.target.value
                })
                break;
            case 'job':
                this.setState({
                    'job':e.target.value
                })
                break;
            case 'address':
                this.setState({
                    'address':e.target.value
                })
                break;
            case 'phone':
                this.setState({
                    'phone':e.target.value
                })
                break;
            case 'experience':
                this.setState({
                    'experience':e.target.value
                })
                break;
            default:
                break;
        }
    }
    selectChange(e){
        console.log(e.target.value)
        this.setState({
            'industry':e.target.value,
        })
    }
    handRowBtnClick = () => {
        
        if(this.state.id){
            this.props.btnClick(this.state);
            this.setState({
                'name':'',
                'job':'',
                'industry':'',
                'address':'',
                'phone':'',
                'experience':''
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.content.id ===this.state.id){
            this.setState({
                'name':'',
                'id':'',
                'job':'',
                'industry':'',
                'address':'',
                'phone':'',
                'experience':''
            })
        }else{
            this.setState({
                'name':nextProps.content.name,
                'id':nextProps.content.id,
                'job':nextProps.content.job,
                'industry':nextProps.content.industry,
                'address':nextProps.content.address,
                'phone':nextProps.content.phone,
                'experience':nextProps.content.experience
            })
        }
        
    }
    render(){
        return(
            <div className="formBox">
                    <div className="row">
                        <span>姓名:</span>
                        <input name='name' value={this.state.name} onChange={this.inputChange}/>
                    </div>
                    <div className="row">
                        <span>工作:</span>
                        <input name='job' value={this.state.job} onChange={this.inputChange}/>
                    </div>
                    <div className="row">
                        <span>行业领域:</span>
                        <select onChange={this.selectChange}>
                            <option value='IT互联网'>IT互联网</option>
                            <option value='医疗'>医疗</option>
                            <option value='建筑'>建筑</option>
                        </select>
                    </div>
                    <div className="row">
                        <span>详细地址:</span>
                        <input name='address' value={this.state.address} onChange={this.inputChange}/>
                    </div>
                    <div className="row">
                        <span>联系电话:</span>
                        <input name='phone' value={this.state.phone} onChange={this.inputChange}/>
                    </div>
                    <div className="row">
                        <span>工作年龄:</span>
                        <input name='experience' value={this.state.experience} onChange={this.inputChange}/>
                    </div>
                    <div className="row">
                        <button className="rowBtn" onClick={this.handRowBtnClick}>保存</button>
                    </div>
                </div>
                
        )
    }
}