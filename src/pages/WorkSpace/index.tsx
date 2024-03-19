
import './index.css'
import {Avatar, Card, Space, Statistic} from "antd";
import {HomeOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import React from "react";
import GithubSvg from './svg/GitHub.svg'
import { createFromIconfontCN } from '@ant-design/icons'
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const gridStyle: React.CSSProperties = {
    width: '33%',
    textAlign: 'center',
    height:'150px',
    // padd
};
const gridStyleRight: React.CSSProperties = {
    width: '33%',
    textAlign: 'center',
    height:'80px',
    cursor:'pointer'
};
const projectList=[
    {id:"1",titleName:'Github',mainWorld:'不要等待机会，而要创造机会',fromPeople:'开源组',createTime:'2023-04-03'},
    {id:"2",titleName:'Github',mainWorld:'不要等待机会，而要创造机会',fromPeople:'开源组',createTime:'2023-04-03'},
    {id:"3",titleName:'Github',mainWorld:'不要等待机会，而要创造机会',fromPeople:'开源组',createTime:'2023-04-03'},
    {id:"4",titleName:'Github',mainWorld:'不要等待机会，而要创造机会',fromPeople:'开源组',createTime:'2023-04-03'},
    {id:"5",titleName:'Github',mainWorld:'不要等待机会，而要创造机会',fromPeople:'开源组',createTime:'2023-04-03'},
    {id:"6",titleName:'Github',mainWorld:'不要等待机会，而要创造机会',fromPeople:'开源组',createTime:'2023-04-03'},
]
const linkList=[
    {icon:'HomeOutlined',content:'首页',url:'https://www.baidu.com'},
    {icon:'HomeOutlined',content:'抖音',url:'https://www.baidu.com'},
    {icon:'HomeOutlined',content:'B站',url:'https://www.baidu.com'},
    {icon:'HomeOutlined',content:'Github',url:'https://www.baidu.com'},
    {icon:'HomeOutlined',content:'个人博客',url:'https://www.baidu.com'},
    {icon:'HomeOutlined',content:'qq',url:'https://www.baidu.com'},
    {icon:'HomeOutlined',content:'微信',url:'https://www.baidu.com'},
    {icon:'HomeOutlined',content:'脸书',url:'https://www.baidu.com'},
    {icon:'HomeOutlined',content:'微博',url:'https://www.baidu.com'},
]
const WorkSpace=()=>{
    return (
        <div style={{}}>
            <div className="work-header">
                <div className="left-box">
                    <div><Avatar size={52} icon={<UserOutlined />} /></div>
                    <div className="tip-word">
                        <h1 className="main-word">早安，百米八秒的Rapper，开始您一天的工作吧！</h1>
                        <span className="tips">今日晴，20℃ - 32℃</span>
                    </div>
                </div>
                <div className="right-box">
             <Space size={20}>
                 <Statistic className="tag-item" style={{}} title="待办" value={112893} />
                 <Statistic className="tag-item" title="项目" value={112893} />
                 <Statistic className="tag-item" title="已完成" value={10} suffix="/ 100" />
             </Space>
                </div>
            </div>
            <div className="my-box">
                <div className="main-box-left">
                    <Card title="项目" extra={<NavLink to="/contentPage/about">更多</NavLink>} style={{width: '100%',minWidth:'500px'}}>
                  <div style={{display:"flex",justifyContent:"space-around",alignItems:'center',flexWrap:'wrap',}}>
                      {
                          projectList.map((item)=>{
                              return <Card.Grid style={gridStyle}>
                                  <div className="grid-title">
                                      <img  src={GithubSvg} alt=""/>
                                      <span className="little-word">{item.titleName}</span>
                                  </div>
                                  <div className="grid-main">
                                      {item.mainWorld}
                                  </div>
                                  <div className="grid-footer">
                                      <span>{item.fromPeople}</span>
                                      <span>{item.createTime}</span>
                                  </div>
                              </Card.Grid>
                          })
                      }
                  </div>
                    </Card>
                </div>
                <div className="main-box-right">
                    <Card title="快捷导航" style={{width: '100%',minWidth:'200px'}}>
                        {
                            linkList.map((item)=>{
                                return <Card.Grid style={gridStyleRight}>
                                    <div className='linkItemStyle'>
                                        <IconFont type="icon-tuichu" />
                                        <span>{item.content}</span>
                                    </div>
                                </Card.Grid>
                            })
                        }
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default WorkSpace
