import React from 'react'

class Panel extends React.Component{
    constructor(props){
        super(props);
        this.selectChange = this.selectChange.bind(this);
        this.editClick = this.editClick.bind(this)
    }
    editClick=(item)=>{
        if(item.id){
            this.props.formProps(item)
        }
    }
    selectChange(e){
        this.setState({
            'industry':e.target.value
        })
    }
    render(){
        return (
            <div>
                <table className="gridtable">
                    <tbody>
                        <tr>
                            <th>姓名</th>
                            <th>工作</th>
                            <th>行业领域</th>
                            <th>详细地址</th>
                            <th>联系电话</th>
                            <th>工作年龄</th>
                            <th>操作</th>
                        </tr>
                        <tr>
                            <td>{this.props.content.name}</td>
                            <td>{this.props.content.job}</td>
                            <td>{this.props.content.industry}</td>
                            <td>{this.props.content.address}</td>
                            <td>{this.props.content.phone}</td>
                            <td>{this.props.content.experience}</td>
                            <td className='point' onClick={()=>{this.editClick(this.props.content)}}>{this.props.content.id?'操作':''}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        )
    }
}
export default Panel