import styled from "styled-components"
import logoPic from "../../statics/logo.png"
export const HeaderWrapper = styled.div`
  height:56px;
  border-bottom: 1px solid #f0f0f0;
  position:relative;
`

export const Logo = styled.a.attrs({
    href:'/'
})`
  position:absolute;
  height:56px;
  top:0;
  left:0;
  width:100px;
  display:block;
  background:url(${logoPic});
  background-size:contain;
`

export const Nav = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 100%;
    padding-right:70px;
    box-sizing:border-box;
`

export const NavItem = styled.div`
  &.Left{
    float:left;
  }
  &.Right{
    float:right;
    color: #969696
  }
  
  &.Active{
    color: #ea6f5a
  }
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color:#333;
  letter-spacing: 1px;
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
  width:240px;
  height: 38px;
  border:none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  margin-top:9px;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 15px;
  margin-left:20px;
  &::placeholder{
    color: #999
  }
`

export const Adition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
  float:right;
`

export const Button = styled.div`
  line-height: 38px;
  border-radius: 19px;
  margin-top:9px;
  float:right;
  border: 1px solid #ec6149;
  margin-right: 15px;
  padding: 0 20px;
  font-size: 14px;
  &.Reg{
    color:#ec6149;
  }
  
  &.Writing{
    color:#fff;
    background:#ec6149;
  }
`
