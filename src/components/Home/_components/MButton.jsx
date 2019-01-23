/*
 * @Author: duanlinlin 
 * @Date: 2019-01-23 16:08:39 
 * @Last Modified by:   duanlinlin 
 * @Last Modified time: 2019-01-23 16:08:39 
 */
import { Button } from 'antd';
import React from 'react'

//package button of antd
const MButton = (props) => {
  return (
    <Button type={props.antdTpe} onClick={props.function}>{props.text}</Button>
  )
}

export default MButton
