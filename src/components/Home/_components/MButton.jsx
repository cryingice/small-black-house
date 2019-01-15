import { Button } from 'antd';
import React from 'react'

const MButton = (props) => {
  return (
    <Button type={props.antdTpe} onClick={props.function}>{props.text}</Button>
  )
}

export default MButton
