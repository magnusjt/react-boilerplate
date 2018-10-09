import React, {Component} from 'react'
import Link from '../../../components/Link'
import styled from 'styled-components'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Header = styled.div`
  flex: 0 0 100px;
  border-bottom: 1px #aaa solid;
  padding: 15px;
  
  display: flex;
  align-items: center;
  
  > h1{
    margin: 0;
  }
`
const Body = styled.div`
  flex: 1;
  
  overflow-y: auto;
`

export default class Layout extends Component{
    render(){
        return (
            <Page>
                <Header>
                    <h1>
                        <Link to="/">Title</Link> - {this.props.subtitle}
                    </h1>
                </Header>
                <Body>
                    {this.props.children}
                </Body>
            </Page>
        )
    }
}