import React from 'react'

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state={
            off:true,
            manDate: [
                {
                    name: '小壮',
                    id: '1',
                    job: '前端开发工程师',
                    industry: 'IT互联网',
                    address: '白各庄新村',
                    phone: '12345678900',
                    experience: '2年'
                },
                {
                    name: '甄棒',
                    id: '2',
                    job: '前端架构师',
                    industry: 'IT互联网',
                    address: '白各庄新村',
                    phone: '66666666666',
                    experience: '10年'
                },
                {
                    name: '小强',
                    id: '3',
                    job: '大老板',
                    industry: 'IT互联网',
                    address: '白各庄新村',
                    phone: '88888888888',
                    experience: '10年'
                }
            ],
        }
        this.handClick = this.handClick.bind(this)
    }
    handClick() {
        this.setState({
            'off': this.state.off ? false : true
        })
    }
    tabClickActive = (item) => {
        this.props.panelProps(item)
    }
    componentWillReceiveProps(nextProps) {
        var arr = this.state.manDate;
        arr.map((item,index) => {
            if(item.id===nextProps.content.id){
                arr[index] = nextProps.content
                this.setState({'manDate': arr});
            }
        })
      }
    render(){
        return(
            <div>
            <div className="left_parent"
                        onClick={this.handClick}
            >前端工作小组</div>
                <ul className={this.state.off ? 'show' : 'off'}>
                    {
                        this.state.manDate.map((item) => {
                            return <li
                                key={item.id}
                                onClick={()=>{this.tabClickActive(item)}}
                                >{item.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Table